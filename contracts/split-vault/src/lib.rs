#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, String, Symbol};

#[contract]
pub struct SplitVault;

#[contractimpl]
impl SplitVault {
    pub fn initialize(env: Env, owner: Address) -> Result<(), String> {
        owner.require_auth();
        if env.storage().instance().has(&symbol_short!("owner")) {
            return Err(String::from_str(&env, "Already initialized"));
        }
        env.storage().instance().set(&symbol_short!("owner"), &owner);
        env.storage().instance().set(&symbol_short!("vol"), &0i128);
        Ok(())
    }

    pub fn set_split(env: Env, receiver: Address, spend_pct: u32, savings_pct: u32) -> Result<(), String> {
        receiver.require_auth();
        if spend_pct + savings_pct != 100 {
            return Err(String::from_str(&env, "Percentages must sum to 100"));
        }
        env.storage().persistent().set(&receiver, &(spend_pct, savings_pct));
        Ok(())
    }

    pub fn get_split(env: Env, receiver: Address) -> (u32, u32) {
        env.storage()
            .persistent()
            .get(&receiver)
            .unwrap_or((70, 30))
    }

    pub fn deposit_and_split(env: Env, sender: Address, receiver: Address, amount: i128) -> Result<(i128, i128), String> {
        sender.require_auth();
        if amount <= 0 {
            return Err(String::from_str(&env, "Amount must be positive"));
        }

        let (spend_pct, savings_pct) = Self::get_split(env.clone(), receiver.clone());
        let savings_amount = (amount * (savings_pct as i128)) / 100;
        let spend_amount = amount - savings_amount;

        // Update receiver savings balance
        let key = (Symbol::new(&env, "sav_bal"), receiver.clone());
        let current_savings: i128 = env
            .storage()
            .persistent()
            .get(&key)
            .unwrap_or(0i128);
        env.storage()
            .persistent()
            .set(&key, &(current_savings + savings_amount));

        // Update total volume
        let current_vol: i128 = env
            .storage()
            .instance()
            .get(&symbol_short!("vol"))
            .unwrap_or(0i128);
        env.storage()
            .instance()
            .set(&symbol_short!("vol"), &(current_vol + amount));

        Ok((spend_amount, savings_amount))
    }

    pub fn get_savings_balance(env: Env, receiver: Address) -> i128 {
        let key = (Symbol::new(&env, "sav_bal"), receiver);
        env.storage()
            .persistent()
            .get(&key)
            .unwrap_or(0i128)
    }

    pub fn get_total_volume(env: Env) -> i128 {
        env.storage()
            .instance()
            .get(&symbol_short!("vol"))
            .unwrap_or(0i128)
    }

    pub fn withdraw_savings(env: Env, receiver: Address, amount: i128) -> Result<i128, String> {
        receiver.require_auth();
        let key = (Symbol::new(&env, "sav_bal"), receiver.clone());
        let current_savings: i128 = env
            .storage()
            .persistent()
            .get(&key)
            .unwrap_or(0i128);

        if amount > current_savings {
            return Err(String::from_str(&env, "Insufficient savings balance"));
        }

        let remaining = current_savings - amount;
        env.storage().persistent().set(&key, &remaining);

        Ok(remaining)
    }
}

mod test;

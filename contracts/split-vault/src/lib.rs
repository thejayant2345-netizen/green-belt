#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, String, Vec};

#[contract]
pub struct SplitVault;

#[contractimpl]
impl SplitVault {
    pub fn initialize(env: Env, owner: Address) -> Result<(), String> {
        owner.require_auth();
        env.storage().instance().set(&symbol_short!("owner"), &owner);
        Ok(())
    }

    pub fn set_split(env: Env, receiver: Address, percent: u32) -> Result<(), String> {
        receiver.require_auth();
        env.storage().persistent().set(&receiver, &percent);
        Ok(())
    }

    pub fn get_split(env: Env, receiver: Address) -> u32 {
        env.storage().persistent().get(&receiver).unwrap_or(0)
    }
}

mod test;

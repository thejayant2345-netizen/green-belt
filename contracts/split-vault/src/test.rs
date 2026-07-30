#![cfg(test)]
use super::*;
use soroban_sdk::{testutils::Address as _, Env};

#[test]
fn test_split_vault_flow() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register_contract(None, SplitVault);
    let client = SplitVaultClient::new(&env, &contract_id);
    
    let owner = Address::generate(&env);
    let sender = Address::generate(&env);
    let receiver = Address::generate(&env);

    // Initialize
    assert!(client.initialize(&owner).is_ok());

    // Default split should be 70 / 30
    let (spend, savings) = client.get_split(&receiver);
    assert_eq!(spend, 70);
    assert_eq!(savings, 30);

    // Set custom split 80 / 20
    assert!(client.set_split(&receiver, &80, &20).is_ok());
    let (spend, savings) = client.get_split(&receiver);
    assert_eq!(spend, 80);
    assert_eq!(savings, 20);

    // Deposit $500
    let (spend_amt, sav_amt) = client.deposit_and_split(&sender, &receiver, &500).unwrap();
    assert_eq!(spend_amt, 400);
    assert_eq!(sav_amt, 100);

    // Check savings balance
    let sav_bal = client.get_savings_balance(&receiver);
    assert_eq!(sav_bal, 100);

    // Check total volume
    let total_vol = client.get_total_volume();
    assert_eq!(total_vol, 500);

    // Withdraw $40 savings
    let remaining = client.withdraw_savings(&receiver, &40).unwrap();
    assert_eq!(remaining, 60);

    let sav_bal_after = client.get_savings_balance(&receiver);
    assert_eq!(sav_bal_after, 60);
}

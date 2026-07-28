#![cfg(test)]
use super::*;
use soroban_sdk::{testutils::Address as _, Env};

#[test]
fn sets_and_reads_split_percent() {
    let env = Env::default();
    let contract_id = env.register_contract(None, SplitVault);
    let client = SplitVaultClient::new(&env, &contract_id);
    let owner = Address::generate(&env);
    let receiver = Address::generate(&env);

    client.initialize(&owner);
    client.set_split(&receiver, &30);

    assert_eq!(client.get_split(&receiver), 30);
}

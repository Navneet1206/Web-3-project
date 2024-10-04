const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should add transactions and retrieve them", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    // Add a transaction
    await transactions.addToBlockchain(
      "0xReceiverAddress", // Replace with a valid address
      ethers.utils.parseEther("1"), 
      "Test Message", 
      "Test Keyword"
    );

    // Retrieve all transactions
    const allTransactions = await transactions.getAllTransactions();
    expect(allTransactions.length).to.equal(1);
  });
});

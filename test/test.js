const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Loot", function () {
  it("Should creat loot", async function () {

    const Token = await ethers.getContractFactory("Art");

    const hardhatToken = await Token.deploy();

    for (i = 0; i < 8000; i++){
      for (j = 0; j < 8; j++){
        console.log(await hardhatToken.getItem(i, j));
      }
      console.log("\n",i,j);
    }
    console.log(await hardhatToken.getItem(i, j));
  
    
    expect(true);

  });
});

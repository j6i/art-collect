const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Art", function () {
  it("Should fill array with rare fidenzas", async function () {
    
    
    const Art = await ethers.getContractFactory("Art");
    const art = await Art.deploy();
    await art.deployed();
    const signer = await ethers.provider.getSigner(0);
    const address = await signer.getAddress();
    await art.connect(signer).claim(101);
    const e = await art.connect(signer).getChest(101)
    console.log(e);
  });
});

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const Initial_Supply = 10000000000000;
import { ethers } from "ethers"

const LockModule = buildModule("LockModule", (m) => {
    const initialSupply = ethers.parseEther("1000000");
    // const initialSupply = m.getParameter("initialSupply", Initial_Supply);

    const weth = m.contract("WETH", [initialSupply], {
    });

    return { weth };
});

export default LockModule;
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WS is ERC20 {
    // uint256 initialSupply = 1000000000000000000000000;

    constructor(uint256 initialSupply) ERC20("Wrapped Sonic", "WS") {
        _mint(msg.sender, initialSupply);
    }

    function deposit() public payable {
        require(msg.value > 0, "Must send Sonic");
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Insufficient Sonic balance");
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(amount);
    }

    receive() external payable {
        deposit();
    }
}

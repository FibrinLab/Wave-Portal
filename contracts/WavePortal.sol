// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] public arr;

    constructor() {
        console.log("Learning solidity again");
    }

    function wave() public {
        totalWaves++;
        console.log("Someone just waved: %s", msg.sender);
        arr.push(msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("Total number of wave is: %d", totalWaves);
        return totalWaves;
    }

    function getAddress() public view returns (address[] memory) {
        return arr;
    }
}
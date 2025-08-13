// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MyToken} from "./MyToken.sol";

contract WrappedMyToken is MyToken {
    constructor(string memory _name, string memory _symbol) MyToken(_name, _symbol) {}

    function mintWithSpecificTokenId(address _to, uint256 _tokenId) public {
        _safeMint(_to, _tokenId);
    }
}

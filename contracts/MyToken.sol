// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) Ownable(_msgSender()) {}

    function mint(address _to, string memory _tokenURI) external onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIds++;
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }

    function getTokenIds() public view returns (uint256) {
        return _tokenIds;
    }
}

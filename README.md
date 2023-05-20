## N42
This project is an implementation of an N42 using ERC721 tokens. The N42 allows users to buy, sell, and transfer N42s, as well as pay royalty fees to the original creators of the N42s.

## Technologies Used
- JavaScript
- TypeScript
- Vue.js
- Pinia
- Tailwind
- Solidity

## Getting Started
To get started with this project, follow these steps:

Clone the repository to your local machine.
Install the project dependencies using npm install.
Build the project using ```npm run build```.
Start the project using ```npm run start```.

N42 creation and issuance
N42 buying and selling
N42 ownership transfer
N42 royalty fee payment

## Code Overview
The main code for this project is located in the N42.sol file. This file inherits from the ERC721 token contract and overrides the ERC721URIStorage and ERC721Royalty contracts to implement the functionality of the N42.

The tokenURI function overrides the ERC721URIStorage function to return the URI of the token. The royaltyInfo function overrides the ERC721Royalty function to calculate the royalty fee for the N42.

This project uses TypeScript to ensure type safety and Vue.js as the frontend framework for implementing the user interface.

## Conclusion
This N42 project demonstrates the use of ERC721 tokens to create and trade N42s, as well as the implementation of royalty fees for the original creators of the N42s.
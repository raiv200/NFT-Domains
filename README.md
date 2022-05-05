## Next.js ,React. js , Tailwind CSS and Tezos Blockchain Project

# NFT Domains
>(This is just a Test Project)

![NFT Domain Project Image]("https://vercel.com/b189c592-5443-46b7-a109-57bf6c96c125")

**Note:** You must have Temple wallet and its browser extension,  to interact with this DAPP.

## NFT Domains is a Marketplace for buying web-3 based domains.

The user can search any name with the available list of domains ending.

After searching, there will be a check, if the domain the user choose is valid or not, after that user can buy the domain.

After the user buy domain, the user can see the purchased domain inside the My Domain tab.

> **Note: 1 user can buy 1 domain only, because, I have chosen a MAP data structure to store the data.**

**Map<walletAddress, domainName>**

So, if the user purchases the domain again then the previously bought domain will be removed and the new domain bought will be stored in the storage of the Smart Contract.

### Here is the List of the Available domains ending:

    1. .x
    2. .crypto
    3. .wallet
    4. .tez
    5. .coin
    6. .bitcoin
    7. .nft
    8. .dao

### Tech Stack Used

    1. Next.js
    2. React.js
    3. Tailwind CSS
    4. Tezos Blockchain
    5. Taquito & Beacon SDK npm libraries 
    6. SmartPY / SmartTS  for creating the contract


## Preview

[Live Demo of the Project](https://nft-domains-ravikas.vercel.app/)

## How to use

> Note: Make sure to create Temple wallet as well.

1. Install Node.js , if you don't have already.

2. Git clone the project inside any folder or on desktop 

   ```bash 
      git clone https://github.com/raiv200/NFT-Domains.git
   ```
3. cd NFTDomains folder

4. Install the neccesary dependencies.
   
    ```bash
     npm install
    ```
5. Start developement server
  
    ```bash
     npm run dev
    ```
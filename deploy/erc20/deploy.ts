import { deployContract } from "../utils";

// This script is used to deploy an ERC20 token contract
// as well as verify it on Block Explorer if possible for the network

// Important: make sure to change contract name and symbol in contract source
// at contracts/erc20/MyERC20Token.sol
export default async function () {
  await deployContract("PointlessOftZkSync",["pointless","pointless","0xd07C30aF3Ff30D96BDc9c6044958230Eb797DDBF","0xF3FB5608C5FAF476E48fA3639224753AA51F440e"]);
}

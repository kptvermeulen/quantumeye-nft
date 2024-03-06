import Web3 from "web3";
import QuantumEyeToken from "../assets/img/QuantumEye.json";

let contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

let web3 = undefined;
let account = undefined;
let contract = undefined;

export async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    return true;
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    return true;
  }

  return false;
}

export function isWeb3Ready() {
  return web3 !== undefined;
}

export async function connectToBlockchain() {
  const accounts = await web3.eth.getAccounts();

  contract = new web3.eth.Contract(QuantumEyeToken.abi, contractAddress);
  account = accounts[0];
}

export function isConnectedToBlockchain() {
  return contract !== undefined && account !== undefined;
}

export async function loadAllMintedQuantumEye() {
  if (!isConnectedToBlockchain) {
    return {};
  }

  let allMintedQuantumEye = {};
  const totalSupply = await contract.methods.totalSupply().call();
  for (let i = 0; i < totalSupply; i++) {
    const tokenId = await contract.methods.tokenByIndex(i).call();
    const token = await loadToken(tokenId);
    allMintedQuantumEye[tokenId.toString()] = token;
  }
  return allMintedQuantumEye;
}

export function claimBoxingBoy(count) {
  return contract.methods.mintBB(count).send({
    from: account,
    value: Web3.utils.toWei("0.1", "ether"),
  });
}

export async function loadToken(tokenId) {
  const tokenData = await contract.methods.get(tokenId).call();
  const owner = await contract.methods.ownerOf(tokenId).call();

  return {
    tokenId: tokenId,
    QuantumEyeId: tokenData[0],
    title: tokenData[1].toString(),
    owner: owner,
  };
}

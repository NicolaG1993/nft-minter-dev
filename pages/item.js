import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styles from "../styles/Item.module.css";

// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// const web3 = createAlchemyWeb3(alchemyKey);

// const contractABI = require("../shared/utils/contract-abi.json");
// const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE";

// import { pinJSONToIPFS } from "../shared/utils/pinata.js";

/* ELIMINERÓ QUESTO FILE */

export default function Item() {
    // WALLET
    /* const fetchWallet = () => {
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((accounts) => {
                    if (accounts.length > 0) {
                        accountChangeHandler(accounts[0]);
                    } else {
                        setData({
                            address: "",
                            Balance: null,
                        });
                        alert(
                            "🦊 Connect to Metamask using the top right button."
                        );
                    }
                })
                .catch((err) => alert("😥 " + err.message)); // Is this branch working only for Chrome ?
        } else {
            alert("install metamask extension!!");
        }
    };

    const accountChangeHandler = (account) => {
        getBalance(account);
        addWalletListener(); // TESTARE
    };

    const getBalance = (address) => {
        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"],
            })
            .then((balance) => {
                setData({
                    address: address,
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    accountChangeHandler(accounts[0]);
                } else {
                    setData({
                        address: "",
                        Balance: null,
                    });
                    alert("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            alert(
                "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser. --> https://metamask.io/download.html"
            );
        }
    } // TESTARE
    */

    /*
    // MINTING NFT
    async function onMintPressed() {
        const { status } = await mintNFT(url, name, description);
        setStatus(status);
    }

    async function mintNFT(url, name, description) {
        //error handling
        if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
            return {
                success: false,
                status: "❗Please make sure all fields are completed before minting.",
            };
        }

        //make metadata
        const metadata = new Object();
        metadata.name = name;
        metadata.image = url;
        metadata.description = description;

        //pinata pin request
        const pinataResponse = await pinJSONToIPFS(metadata);
        if (!pinataResponse.success) {
            return {
                success: false,
                status: "😢 Something went wrong while uploading your tokenURI.",
            };
        }
        const tokenURI = pinataResponse.pinataUrl;

        //load smart contract
        window.contract = await new web3.eth.Contract(
            contractABI,
            contractAddress
        ); //loadContract();

        //set up your Ethereum transaction
        const transactionParameters = {
            to: contractAddress, // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: window.contract.methods
                .mintNFT(window.ethereum.selectedAddress, tokenURI)
                .encodeABI(), //make call to NFT smart contract
        };

        //sign transaction via Metamask
        try {
            const txHash = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [transactionParameters],
            });
            return {
                success: true,
                status:
                    "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
                    txHash,
            };
        } catch (error) {
            return {
                success: false,
                status: "😥 Something went wrong: " + error.message,
            };
        }
    } */

    return (
        <div id={styles["Item"]}>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.picture}>
                            {/* img va qua dentro */}
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.info}>
                                <h1>NFT Title</h1>
                                <h2>0.10 ETH</h2>
                                <div className={styles.inline}>
                                    <p>Owned by: </p>
                                    <a>Jack White</a>
                                </div>
                                <div className={styles.inline}>
                                    <p>Created by: </p>
                                    <a>Jack White</a>
                                </div>
                                <div className={styles.inline}>
                                    <p>Released: </p>
                                    <p>Jun 1, 2022</p>
                                </div>
                                <div className={styles.inline}>
                                    <p>Original listing: </p>
                                    <p>€89.00</p>
                                </div>
                                <button className={styles.buy}>Buy NFT</button>
                                <button className={styles.alert}>Like</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.more}>
                <button>More info...</button>
            </section>

            {/* <footer className={styles.footer}></footer> */}
        </div>
    );
}

/*
COSA SERVE:
1. header e footer (links non fonzionanti) 🐸
2. sezione nft (img, titolo, infos) 🐸
3. pulsante per acquistare nft
4. UI di collegamento wallet e acquisto
5. backend transazione TEST MODE
6. messaggio conferma o errore
 */

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styles from "../styles/Header.module.css";
import stylesHamburger from "../styles/HamburgerButton.module.css";
import Link from "next/link";

const links = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/marketplace",
        title: "Marketplace",
    },
    {
        to: "/marketplace-nft",
        title: "NFTs",
    },
    {
        to: "/minter",
        title: "Minter",
    },
    {
        to: "/augmented-reality",
        title: "Augmented Reality",
    },
];

export default function Header() {
    const [data, setData] = useState({
        status: null,
        address: "",
        balance: null,
    });
    console.log("data", data);

    // NAV
    const [navIsActive, setNavIsActive] = useState(false);
    const toggleNav = () => setNavIsActive(!navIsActive);
    const closeNav = () => setNavIsActive(false);
    const getBtnStyle = () => {
        if (navIsActive) return stylesHamburger["hamBtn-active"];
        else return stylesHamburger["hamBtn"];
    };

    // WALLET
    const fetchWallet = async () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((accounts) => {
                    if (accounts.length > 0) {
                        // addWalletListener();
                        const obj = {
                            status: "👆🏽 Write a message in the text-field above.",
                            address: accounts[0],
                            balance: getBalance(accounts[0]),
                        };
                        return obj;
                    } else {
                        return {
                            status: "🦊 Connect to Metamask using the top right button.",
                            address: "",
                            balance: null,
                        };
                    }
                })
                .catch((err) => {
                    return {
                        status: "😥 " + err.message,
                        address: "",
                        balance: null,
                    };
                });
        } else {
            return {
                status: "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser. --> https://metamask.io/download.html",
                address: "",
                balance: null,
            };
        }
    };
    const fetchCurrentWallet = async () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_accounts" })
                .then((accounts) => {
                    if (accounts.length > 0) {
                        console.log("account", accounts[0]);
                        console.log("balance", getBalance(accounts[0]));
                        setData({
                            status: "👆🏽 Write a message in the text-field above.",
                            address: accounts[0],
                            balance: getBalance(accounts[0]),
                        });
                    } else {
                        setData({
                            status: "🦊 Connect to Metamask using the top right button.",
                            address: "",
                            balance: null,
                        });
                    }
                })
                .catch((err) => {
                    setData({
                        status: "😥 " + err.message,
                        address: "",
                        balance: null,
                    });
                });
        } else {
            setData({
                status: "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser. --> https://metamask.io/download.html",
                address: "",
                balance: null,
            });
        }
    };
    const getBalance = (address) => {
        // Requesting balance method
        window.ethereum
            .request({
                status: null,
                method: "eth_getBalance",
                params: [address, "latest"],
            })
            .then((balance) => {
                setData({
                    address: address,
                    balance: ethers.utils.formatEther(balance),
                });
            });
    };
    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setData({
                        address: accounts[0],
                        balance: getBalance(accounts[0]),
                    });
                } else {
                    setData({
                        status: "🦊 Connect to Metamask using the top right button.",
                        address: "",
                        balance: null,
                    });
                }
            });
        } else {
            setData({
                status: "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser. --> https://metamask.io/download.html",
                address: "",
                balance: null,
            });
        }
    }

    useEffect(() => {
        fetchCurrentWallet();
        addWalletListener();
    }, []);

    return (
        <>
            <header className={styles.header}>
                <Link href={`/`}>
                    <a>
                        <div className={styles.logo}></div>
                    </a>
                </Link>
                {/* <div className={styles.hamburger}></div> */}

                <div className={getBtnStyle()} onClick={toggleNav}>
                    <div className={stylesHamburger["stick"]}></div>
                </div>
            </header>

            <nav
                className={styles.nav}
                style={
                    navIsActive
                        ? { transform: "translateX(-100%)" }
                        : { transform: "translateX(0%)" }
                }
            >
                <ul className={styles["header-nav-ul"]}>
                    {links.map((link, i) => (
                        <Link href={link.to} key={i}>
                            <a onClick={closeNav}>
                                <li>{link.title} </li>
                            </a>
                        </Link>
                    ))}
                    <li onClick={fetchWallet}>Wallet</li>
                </ul>

                <div className={styles["header-nav-wallet"]}>
                    <p>
                        {String(data.address).substring(0, 6) +
                            "..." +
                            String(data.address).substring(38)}
                    </p>
                    <p>{data.balance}ETH</p>
                </div>
            </nav>
        </>
    );
}

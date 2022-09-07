import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import styles from "../styles/Marketplace.module.css";

const nfts = [
    {
        id: 1,
        title: "NFT Title",
        slug: "nft-1",
        price: "10,00",
        pic: "/assets/nft1.jpg",
    },
    {
        id: 2,
        title: "NFT Title",
        slug: "nft-2",
        price: "10,00",
        pic: "/assets/nft2.jpg",
    },
    {
        id: 3,
        title: "NFT Title",
        slug: "nft-3",
        price: "10,00",
        pic: "/assets/nft3.jpg",
    },
];

export default function Marketplace() {
    const [filterNav, setFilterNav] = useState(false);

    const [research, setResearch] = useState("");
    const [collection, setCollection] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    return (
        <div id={styles["Marketplace"]}>
            <section>
                <div className={styles["filters-box"]}>
                    <h5
                        className={styles["filters-button"]}
                        onClick={() => setFilterNav(!filterNav)}
                    >
                        Filters
                    </h5>
                    <div
                        className={styles["filters"]}
                        style={
                            filterNav
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <div className={styles["filters-line"]}>
                            <p>Collection: </p>
                            <Select
                                styles={{
                                    control: (styles, state) => ({
                                        ...styles,
                                        width: "100%",
                                        backgroundColor: "white",
                                        border: state.isFocused
                                            ? "rgb(93, 93, 93) solid"
                                            : "rgb(220, 220, 220) solid",
                                        borderWidth: "2px",
                                        borderRadius: "8px",
                                        // padding: "12px",
                                        transition: "0.2s ease",
                                        cursor: "pointer",
                                        boxShadow: state.isFocused ? 0 : 0,
                                        "&:hover": {
                                            border: state.isFocused
                                                ? "rgb(93, 93, 93) solid"
                                                : "rgb(220, 220, 220) solid",
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.05) 0px 4px 12px",
                                        },
                                    }),

                                    input: (styles) => ({
                                        ...styles,
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                    }),

                                    menu: (styles) => ({
                                        ...styles,
                                        marginTop: 0,
                                        marginBottom: 0,
                                    }),

                                    option: (
                                        styles,
                                        {
                                            data,
                                            isDisabled,
                                            isFocused,
                                            isSelected,
                                        }
                                    ) => ({
                                        ...styles,
                                        transition: "0.2s ease",
                                        backgroundColor: isFocused
                                            ? "rgb(245, 245, 245)"
                                            : "white",
                                        color: "black",
                                        cursor: isDisabled
                                            ? "not-allowed"
                                            : "pointer",
                                    }),
                                }}
                                defaultValue={{
                                    value: "",
                                    label: "All",
                                }}
                                onChange={(e) => setCollection(e)}
                                options={[
                                    {
                                        value: "La mia collezione",
                                        label: "La mia collezione",
                                    },
                                    {
                                        value: "Nuova collezione",
                                        label: "Nuova collezione",
                                    },
                                ]}
                            />
                        </div>

                        <div className={styles["filters-line"]}>
                            <p>Max price: €</p>

                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                step={1}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Search product..."
                    onChange={(e) => setResearch(e.target.value)}
                ></input>
            </section>

            <section>
                <div className={styles["items-list"]}>
                    {nfts.map((el) => (
                        <>
                            <Link href={`/nft/${el.slug}`}>
                                <a>
                                    <div
                                        key={el.id}
                                        className={styles["item-card"]}
                                    >
                                        <div
                                            className={styles["item-card-img"]}
                                        >
                                            <Image
                                                src={
                                                    el.pic
                                                        ? el.pic
                                                        : "/pics/Logo.jpg"
                                                }
                                                alt={el.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div
                                            className={styles["item-infos-box"]}
                                        >
                                            <h3>{el.title}</h3>
                                            <p>{el.price} ETH</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ))}
                </div>
            </section>

            <div className={styles["form-line"]}>
                <Link href={`/minter`}>
                    <a>
                        <button id="addButton" className={styles["addButton"]}>
                            Add NFT
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    );
}

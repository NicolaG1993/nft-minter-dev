import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import styles from "../styles/Marketplace.module.css";

const items = [
    {
        id: 1,
        title: "New York City",
        slug: "nyc",
        price: "40",
        pic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/new-york-city-black-white-crystal-wightman.jpg",
    },
    {
        id: 2,
        title: "The Ocean",
        slug: "the-ocean",
        price: "75",
        pic: "https://www.bmbf.de/SharedDocs/Bilder/de/bmbf/bmbf_datenbank/5/51/51081.jpg?__blob=poster&v=1",
    },
    // {
    //     id: 3,
    //     title: "A Great Sculpture",
    //     slug: "a-great-sculpture",
    //     price: "100",
    //     pic: "https://www.pressinbag.it/images/2020/07/15/dante-il-pensatore-di-rodin_large.jpg",
    // },
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
                    {items.map((el) => (
                        <>
                            <Link href={`/item/${el.slug}`}>
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
                                            <p>{el.price}€</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ))}
                </div>
            </section>

            <div className={styles["form-line"]}>
                <Link href={`/new-item`}>
                    <a>
                        <button id="addButton" className={styles["addButton"]}>
                            Add Product
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    );
}

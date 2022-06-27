import { useEffect, useState } from "react";
import Select from "react-select";
import styles from "../styles/Minter.module.css";

export default function NewItem() {
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState();
    const [NFT, setNFT] = useState();

    const onSubmit = async () => {
        // const res = await mintNFT(file, name, description);
        // console.log("res: ", res);
        // setStatus(res.status);
        // if (res.success) {
        //     setName("");
        //     setDescription("");
        //     setFile();
        // }
    };

    //INFO DIV
    const infos = [
        `Simply add your item's picture, title, and infos, then press "Submit"`,
        "File types supported: JPG, PNG, GIF, SVG, WEBM. Max size: 100 MB",
        "This is the collection where your item will appear",
        "Add the link to the NFT you want to connect to this product",
        "The number of items that are in stock",
    ];
    const [selectedInfo, setSelectedInfo] = useState("");

    //CURSOR POSITION
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setCoords({
            x: event.pageX,
            y: event.pageY,
        });
    };

    //SELECT OPTIONS INPUT
    const [overedIcons, setOveredIcons] = useState(false);
    const hidden = {
        display: "none",
    };
    const visible = {
        display: "block",
        left: `${coords.x + 12}px`,
        top: `${coords.y + 12}px`,
    };
    const options = [
        { value: "La mia collezione", label: "La mia collezione" },
        { value: "Nuova collezione", label: "Nuova collezione" },
    ];

    return (
        <div id={styles["Minter"]} onMouseMove={handleMouseMove}>
            <section>
                <form>
                    <div
                        className={styles["form-infos-box"]}
                        style={overedIcons ? visible : hidden}
                    >
                        {selectedInfo}
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h1 id="title">Create New Product</h1>
                            <p
                                onMouseEnter={() => (
                                    setOveredIcons(true),
                                    setSelectedInfo(infos[0])
                                )}
                                onMouseLeave={() => (
                                    setOveredIcons(false), setSelectedInfo("")
                                )}
                            >
                                &#9432;
                            </p>
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <p>
                            <span className={styles["red"]}>*</span> Required
                            fields
                        </p>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>
                                File: <span className={styles["red"]}>*</span>
                            </h3>
                            <p
                                onMouseEnter={() => (
                                    setOveredIcons(true),
                                    setSelectedInfo(infos[1])
                                )}
                                onMouseLeave={() => (
                                    setOveredIcons(false), setSelectedInfo("")
                                )}
                            >
                                &#9432;
                            </p>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                id="FileID"
                                type="file"
                                name="filename"
                                accept="image/png, image/jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <label
                                htmlFor="FileID"
                                className={styles["custom-file-upload"]}
                            >
                                Choose a file :
                            </label>
                            <span className={styles["input-file-name"]}>
                                {file ? file.name : ""}
                            </span>
                        </div>
                    </div>

                    {/* <h2>Link to asset: </h2>
                    <input
                        type="text"
                        placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                        onChange={(e) => setURL(e.target.value)}
                    /> */}

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>
                                Name: <span className={styles["red"]}>*</span>
                            </h3>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                placeholder="e.g. My product!"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>Description:</h3>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                placeholder="e.g. Even cooler than cryptokitties ;)"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>
                                Collection:{" "}
                                <span className={styles["red"]}>*</span>
                            </h3>
                            <p
                                onMouseEnter={() => (
                                    setOveredIcons(true),
                                    setSelectedInfo(infos[2])
                                )}
                                onMouseLeave={() => (
                                    setOveredIcons(false), setSelectedInfo("")
                                )}
                            >
                                &#9432;
                            </p>
                        </div>

                        <div className={styles["input-box"]}>
                            <Select
                                defaultValue={options[2]}
                                onChange={(e) => setCollection(e)}
                                options={options}
                                styles={{
                                    control: (styles, state) => ({
                                        ...styles,
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
                                            ? "white"
                                            : "white",
                                        color: "black",
                                        cursor: isDisabled
                                            ? "not-allowed"
                                            : "pointer",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgb(245, 245, 245)",
                                        },
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>Properties:</h3>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                placeholder="e.g. Even cooler than cryptokitties ;)"
                                onChange={(e) => setProperties(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>Connect NFT:</h3>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                placeholder="e.g. Link to the NFT"
                                onChange={(e) => setNFT(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <div className={styles["heading-box"]}>
                            <h3>In stock:</h3>
                            <p
                                onMouseEnter={() => (
                                    setOveredIcons(true),
                                    setSelectedInfo(infos[3])
                                )}
                                onMouseLeave={() => (
                                    setOveredIcons(false), setSelectedInfo("")
                                )}
                            >
                                &#9432;
                            </p>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                step={1}
                                onChange={(e) => setSupply(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles["form-line"]}>
                        <button
                            id="mintButton"
                            className={styles["mintButton"]}
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    </div>

                    <p id="status" style={{ color: "red" }}>
                        {status}
                    </p>
                </form>
            </section>
        </div>
    );
}

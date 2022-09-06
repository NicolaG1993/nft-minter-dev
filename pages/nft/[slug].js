import Image from "next/image";
import styles from "../../styles/Item.module.css";

const nfts = [
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
];

export default function NFT({ item }) {
    console.log("item", item);

    return (
        <div id={styles["Item"]}>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.picture}>
                            <Image
                                src={item.pic ? item.pic : "/pics/Logo.jpg"}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.info}>
                                <h1>{item.title}</h1>
                                <h2>{item.price} ETH</h2>
                                {/* <div className={styles.inline}>
                                    <p>Owned by: </p>
                                    <a>Jack White</a>
                                </div> */}
                                <div className={styles.inline}>
                                    <p>Created by: </p>
                                    <a>Jack White</a>
                                </div>
                                <div className={styles.inline}>
                                    <p>Released: </p>
                                    <p>Jun 1, 2022</p>
                                </div>
                                {/* <div className={styles.inline}>
                                    <p>Original listing: </p>
                                    <p>€89.00</p>
                                </div> */}
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

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;

    let item = nfts.filter((el) => el.slug === slug);

    console.log("slug:", slug);
    console.log("item:", item);

    return {
        props: { item: item[0] },
    };
}

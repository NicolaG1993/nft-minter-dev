import Image from "next/image";
import styles from "../../styles/Item.module.css";

const items = [
    {
        id: 1,
        title: "Mocassino nero da uomo in pelle di coccodrillo",
        slug: "mocassino-nero",
        price: "3.950,00",
        pic: "/assets/mocassino-nero.jpg",
    },
    {
        id: 2,
        title: "Mocassino con doppia fibbia da uomo in pelle antica verde",
        slug: "mocassino-verde",
        price: "695,00",
        pic: "/assets/mocassino-verde.jpg",
    },
    {
        id: 3,
        title: "Panelled low-top sneakers",
        slug: "sneakers",
        price: "450,00",
        pic: "/assets/sneakers.jpg",
    },
];

export default function Item({ item }) {
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
                                objectFit="contain"
                            />
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.info}>
                                <h1>{item.title}</h1>
                                <h2>{item.price} €</h2>
                                {/* <div className={styles.inline}>
                                    <p>Owned by: </p>
                                    <a>Jack White</a>
                                </div> */}
                                <div className={styles.inline}>
                                    <p>Brand: </p>
                                    <a>Santoni Shoes</a>
                                </div>
                                <div className={styles.inline}>
                                    <p>Released: </p>
                                    <p>Jun 1, 2022</p>
                                </div>
                                {/* <div className={styles.inline}>
                                    <p>Original listing: </p>
                                    <p>€89.00</p>
                                </div> */}
                                <button className={styles.buy}>
                                    Buy Product
                                </button>
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

    let item = items.filter((el) => el.slug === slug);

    console.log("slug:", slug);
    console.log("item:", item);

    return {
        props: { item: item[0] },
    };
}

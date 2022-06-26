import Head from "next/head";
import Header from "../components/Header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>NFT Shop Test</title>
                <meta name="description" content="NFT Shop Test" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            {children}
            {/* <Footer /> */}
        </>
    );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        REACT_APP_PINATA_KEY: process.env.REACT_APP_PINATA_KEY,
        REACT_APP_PINATA_SECRET: process.env.REACT_APP_PINATA_SECRET,
        REACT_APP_ALCHEMY_KEY: process.env.REACT_APP_ALCHEMY_KEY,
        REACT_APP_BLOCKCHAIN_PRIVATE_KEY:
            process.env.REACT_APP_BLOCKCHAIN_PRIVATE_KEY,
    },

    disableStaticImages: true,
    images: {
        domains: ["cdn.chec.io"],
    },
};

module.exports = nextConfig;

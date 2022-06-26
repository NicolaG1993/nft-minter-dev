const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

import axios from "axios";

export const pinFileToIPFS = async (JSONBody) => {
    // JSONBody contiene: name, file, description
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

    // let JSONBody = new FormData();
    // JSONBody.append("file", file);

    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            },
        })
        .then(function (response) {
            console.log("pinata response: ", response.data);
            return {
                success: true,
                pinataUrl:
                    "https://gateway.pinata.cloud/ipfs/" +
                    response.data.IpfsHash,
            }; // adesso devo capire se ho gia fatto upload e pin
            // devo integrare questo nel minter !
        })
        .catch(function (error) {
            console.log(error);
            return {
                success: false,
                message: error.message,
            };
        });

    /*
    JSONBody.append("pinataOptions", '{"cidVersion": 1}'); // ??
    JSONBody.append(
        "pinataMetadata",
        `{"name": ${JSONBody.name}, "keyvalues": {"company": "Nicola Gaioni Design"}}`
    );*/

    /*
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            },
        })
        .then(function (response) {
            console.log("pinata response: ", response.data);
            return {
                success: true,
                pinataUrl:
                    "https://gateway.pinata.cloud/ipfs/" +
                    response.data.IpfsHash,
            };
        })
        .catch(function (error) {
            console.log(error);
            return {
                success: false,
                message: error.message,
            };
        });
        */
};

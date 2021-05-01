import {mockProductData} from "../../data/productData";

const getProducts = async () => {
    return Promise.resolve(mockProductData);
}

export {getProducts};
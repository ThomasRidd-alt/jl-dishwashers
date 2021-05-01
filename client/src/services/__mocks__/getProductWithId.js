import {mockProductItemData} from "../../data/productData";

const getProductWithId = async () => {
    return Promise.resolve(mockProductItemData);
}

export {getProductWithId};
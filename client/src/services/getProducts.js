import {isProduction} from "./helpers";

async function getProducts() {
    const url = isProduction() ? '/api/product-grid' : 'http://localhost:3000/api/product-grid'
    try {
        const result = await fetch(
            url
        );
        const data = await result.json();

        const products = data.products.map(item => {
            return {
                title: item.title,
                code: item.productId,
                image: item.image,
                price: item.price.now
            }
        })
        return products;
    } catch (e) {
        return null;
    }
}


export {getProducts}
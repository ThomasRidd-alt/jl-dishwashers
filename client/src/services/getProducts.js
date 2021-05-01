async function getProducts() {
    console.log("getProducts")
    try {
        const result = await fetch(
            'http://localhost:3000/api/product-grid'
        );
        const data = await result.json();

        return data.products;
    } catch (e) {
        return null;
    }
}


export {getProducts}
async function getProducts() {
    try {
        const result = await fetch(
            '/api/product-grid'
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
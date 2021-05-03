async function getProductWithId(id) {
    try {
        const result = await fetch(
            `/api/product/${id}`
        );
        const data = await result.json();

        return data;
    } catch (e) {
        return null;
    }
}


export {getProductWithId}
import {isProduction} from "./helpers";

async function getProductWithId(id) {
    const url = isProduction() ? `/api/product/${id}` : `http://localhost:3000/api/product/${id}`

    try {
        const result = await fetch(
            url
        );
        const data = await result.json();
        return data.title ? data : null;
    } catch (e) {
        return null;
    }
}


export {getProductWithId}
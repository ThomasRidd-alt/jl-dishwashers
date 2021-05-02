import ProductItemHeader from "./ProductItemHeader";
import React from "react";

const ProductItemFetching = () => {

    return (<>
        <ProductItemHeader title={'Loading product'}/>
        <main>
            <p>Fetching product data</p>
        </main>
    </>)
}

export default ProductItemFetching;
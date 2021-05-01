import ProductItemHeader from "./ProductItemHeader";
import React from "react";

const ProductItemFetching = () => {

    return (<>
        <ProductItemHeader title={'Loading'}/>
        <main>
            <p>Fetching data</p>
        </main>
    </>)
}

export default ProductItemFetching;
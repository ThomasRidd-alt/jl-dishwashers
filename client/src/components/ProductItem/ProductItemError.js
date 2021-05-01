import ProductItemHeader from "./ProductItemHeader";
import React from "react";

const ProductItemError = () => {

    return (<>
        <ProductItemHeader title={'There was an error'}/>
        <main>
            <p>There was an error finding this product</p>
        </main>
    </>)
}

export default ProductItemError;
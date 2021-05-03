import ProductItemHeader from "./ProductItemHeader";
import React from "react";

const ProductItemFetching = () => {

    return (<>
        <ProductItemHeader title={'Loading product'}/>
        <main>
            <div className={'dishwasher-width-container'}>
                <p>Fetching product data</p>
            </div>
        </main>
    </>)
}

export default ProductItemFetching;
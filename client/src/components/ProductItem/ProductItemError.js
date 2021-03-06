import ProductItemHeader from "./ProductItemHeader";
import React from "react";

const ProductItemError = () => {

    return (<>
        <ProductItemHeader title={'There was an error'}/>
        <main>
            <div className={'dishwasher-width-container item_page_container'}>
                <p className={'jl-body-text'}>There was an error finding this product</p>
            </div>
        </main>
    </>)
}

export default ProductItemError;
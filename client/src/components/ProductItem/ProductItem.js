import ProductItemHeader from "./ProductItemHeader";
import ProductItemMedia from "./ProductItemMedia";
import ProductItemFinance from "./ProductItemFinance";
import ProductItemInformation from "./ProductItemInformation";
import ProductItemSpecification from "./ProductItemSpecification";
import React from "react";

const ProductItem = props => {
    let {product} = props;
    return (<>
        <ProductItemHeader title={product.title}/>
        <main>
            <ProductItemMedia product={product}/>
            <ProductItemFinance product={product}/>
            <ProductItemInformation product={product}/>
            <ProductItemSpecification product={product}/>
        </main>
    </>)
}

export default ProductItem;
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
            <ProductItemMedia images={product.media.images}/>
            <ProductItemFinance price={product.price.now}
                                displaySpecialOffer={product.displaySpecialOffer}
                                includedServices={product.additionalServices.includedServices}/>
            <ProductItemInformation code={product.code} productInformation={product.details.productInformation}/>
            <ProductItemSpecification specification={product.details.features[0].attributes}/>
        </main>
    </>)
}

export default ProductItem;
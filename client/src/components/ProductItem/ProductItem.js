import ProductItemHeader from "./ProductItemHeader";
import ProductItemMedia from "./ProductItemMedia";
import ProductItemFinance from "./ProductItemFinance";
import ProductItemInformation from "./ProductItemInformation";
import ProductItemSpecification from "./ProductItemSpecification";
import React from "react";
import DocumentTitle from "react-document-title";

const ProductItem = props => {
    let {product} = props;
    return (
        <DocumentTitle title={`${product.title} - Dishwashers`}>
            <>
                <ProductItemHeader title={product.title}/>
                <main>
                    <div className={'dishwasher-width-container item-page__container'}>
                        <ProductItemMedia images={product.media.images}/>
                        <ProductItemFinance price={product.price.now}
                                            displaySpecialOffer={product.displaySpecialOffer}
                                            includedServices={product.additionalServices.includedServices}/>
                        <ProductItemInformation code={product.code}
                                                productInformation={product.details.productInformation}/>
                        <ProductItemSpecification specification={product.details.features[0].attributes}/>
                    </div>
                </main>
            </>
        </DocumentTitle>)
}

export default ProductItem;
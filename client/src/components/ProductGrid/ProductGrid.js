import ProductGridHeader from "./ProductGridHeader";
import ProductGridItem from "./ProductGridItem";
import DocumentTitle from "react-document-title";
import React from "react";

const ProductGrid = props => {
    const products = props.products.slice(0, 20)
    return (
        <DocumentTitle title='View all - Dishwashers'>
            <>
                <ProductGridHeader products={props.products}/>
                <main>
                    <div className={'dishwasher-width-container'}>
                        <div className={'grid-page__container'}>
                            {products.map(product => <ProductGridItem key={product.code} product={product}/>)}
                        </div>
                    </div>
                </main>
            </>
        </DocumentTitle>
    );
};

export default ProductGrid
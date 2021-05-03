import ProductGridHeader from "./ProductGridHeader";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = props => {
    return (
        <>
            <ProductGridHeader products={props.products}/>
            <main>
                <div className={'dishwasher-width-container'}>
                    <div className={'grid-page__container'}>
                        {props.products.map(product => <ProductGridItem key={product.code} product={product}/>)}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductGrid
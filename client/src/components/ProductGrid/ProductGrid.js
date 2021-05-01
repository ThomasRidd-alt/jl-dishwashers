import ProductGridHeader from "./ProductGridHeader";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = props => {
    return (
        <>
            <ProductGridHeader products={props.products}/>
            <main>
                {props.products.map(product => <ProductGridItem key={product.code} product={product}/>)}
            </main>
        </>
    );
};

export default ProductGrid
import ProductGridHeader from "./ProductGridHeader";

const ProductGridError = props => {
    return (
        <>
            <ProductGridHeader/>
            <main>
                <p className={'errorMessage'}>Error fetching products</p>
            </main>
        </>
    );
};

export default ProductGridError
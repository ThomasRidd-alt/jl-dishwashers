import ProductGridHeader from "./ProductGridHeader";

const ProductGridFetching = props => {
    return (
        <>
            <ProductGridHeader/>
            <main>
                <p className={'fetchMessage'}>Fetching products</p>
            </main>
        </>
    );
};

export default ProductGridFetching
import ProductGridHeader from "./ProductGridHeader";

const ProductGridError = props => {
    return (
        <>
            <ProductGridHeader error={'There was an error'}/>
            <main>
                <div className={'dishwasher-width-container item-page__container'}>
                    <p className={'jl-body-text'}>Error fetching products</p>
                </div>
            </main>
        </>
    );
};

export default ProductGridError
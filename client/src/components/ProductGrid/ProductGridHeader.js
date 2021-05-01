const ProductGridHeader = props => {
    if (props.products && props.products.length > 0) {
        return (
            <header>
                <h1>Dishwashers ({props.products.length})</h1>
            </header>
        )
    } else {
        return (
            <header>
                <h1>Dishwashers</h1>
            </header>
        );
    }
};

export default ProductGridHeader
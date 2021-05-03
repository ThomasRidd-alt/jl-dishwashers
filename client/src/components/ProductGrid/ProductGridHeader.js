const ProductGridHeader = props => {
    if (props.products && props.products.length > 0) {
        return (
            <header className={'grid-page__header'}>
                <div className={'dishwasher-width-container'}>
                    <h1 className={'grid-page__header-text jl-heading-large'}>Dishwashers
                        ({props.products.length})</h1>
                </div>
            </header>
        )
    } else {
        return (
            <header>
                <div className={'grid-page__header dishwasher-width-container'}>

                    <h1 className={'grid-page__header-text jl-heading-large'}>Dishwashers</h1>
                </div>
            </header>
        );
    }
};

export default ProductGridHeader
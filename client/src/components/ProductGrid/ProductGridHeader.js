const ProductGridHeader = props => {
    let content = 'Dishwashers'
    if (props.error) {
        content = props.error
    } else if (props.products && props.products.length > 0) {
        content = `Dishwashers (${props.products.length})`
    }

    return (
        <header className={'grid-page__header'}>
            <div className={'dishwasher-width-container'}>
                <h1 className={'grid-page__header-text jl-heading-large'}>{content}</h1>
            </div>
        </header>
    );
};

export default ProductGridHeader
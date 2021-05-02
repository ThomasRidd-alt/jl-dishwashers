const ProductItemHeader = props => {
    return (
        <header className={'item-page__header'}>
            <h1 className={'item-page__heading'}>{props.title}</h1>
        </header>
    )
};

export default ProductItemHeader
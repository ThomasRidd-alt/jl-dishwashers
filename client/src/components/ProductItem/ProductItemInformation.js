const ProductItemInformation = props => {
    return (
        <section className={'item-page__information'}>
            <h2 className={'item-page__heading'}>Product information</h2>
            <p className={'item-page__product-code'}>Product code: {props.code}</p>
            <div className={'item-page__product-information'}
                 dangerouslySetInnerHTML={{__html: props.productInformation}}/>
        </section>
    )
};

export default ProductItemInformation
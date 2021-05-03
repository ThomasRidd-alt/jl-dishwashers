const ProductItemInformation = props => {
    return (
        <section className={'dishwasher-section-container item-page__main-column-section'}>
            <h2 className={'item-page__section-heading jl-heading'}>Product information</h2>
            <p className={'jl-body-text'}>Product code: {props.code}</p>
            <div className={'item-page__product-information jl-body-text '}
                 dangerouslySetInnerHTML={{__html: props.productInformation}}/>
        </section>
    )
};

export default ProductItemInformation
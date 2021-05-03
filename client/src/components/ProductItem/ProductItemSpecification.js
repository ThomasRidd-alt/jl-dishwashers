const ProductItemSpecification = props => {
    const specificationRow = (attribute) => {
        return (
            <div className={'item-page__specification-row jl-body-text'} key={attribute.name}>
                <span className={'item-page__specification-row-name'}>{attribute.name}</span>
                <span className={'item-page__specification-row-value'}>{attribute.value}</span>
            </div>
        )
    }

    return (
        <section className={'dishwasher-section-container item-page__main-column-section'}>
            <h2 className={'item-page__section-heading jl-heading'}>Product specification</h2>
            {props.specification.map(attribute => specificationRow(attribute))}
        </section>
    )
};

export default ProductItemSpecification
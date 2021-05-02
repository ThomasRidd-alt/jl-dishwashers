const ProductItemSpecification = props => {
    const specificationRow = (attribute) => {
        return (
            <div className={'item-page__specification-row'} key={attribute.name}>
                <span className={'item-page__specification-row-name'}>{attribute.name}</span>
                <span className={'item-page__specification-row-value'}>{attribute.value}</span>
            </div>
        )
    }

    return (
        <section className={'item-page__specification'}>
            <h2 className={'item-page__heading'}>Product specification</h2>
            {props.specification.map(attribute => specificationRow(attribute))}
        </section>
    )
};

export default ProductItemSpecification
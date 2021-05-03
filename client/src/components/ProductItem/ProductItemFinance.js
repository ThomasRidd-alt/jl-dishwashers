const ProductItemFinance = props => {

    const getGuaranteeInfo = () => {
        return <div className={'item-page__finance-guarantee jl-body-text'}>{props.includedServices.map(service => <p
            key={service}>{service}</p>)}</div>
    }

    const getDisplaySpecialOffer = () => {
        if (props.displaySpecialOffer) {
            return <p className={'item-page__finance-special-offer jl-highlight-text'}>Special
                Offer: {props.displaySpecialOffer}</p>
        } else {
            return null
        }
    }

    return (
        <section className={'dishwasher-section-container item-page__sidebar-column-section'}>
            <p className={'item-page__finance-price jl-body-text-large'}>£{props.price}</p>
            {getDisplaySpecialOffer()}
            {getGuaranteeInfo()}
        </section>
    )
};

export default ProductItemFinance
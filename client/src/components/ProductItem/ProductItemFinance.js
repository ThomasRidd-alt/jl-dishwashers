const ProductItemFinance = props => {

    const getDisplaySpecialOffer = () => {
        if (props.displaySpecialOffer) {
            return <p className={'item-page__finance-special-offer'}>Special Offer: {props.displaySpecialOffer}</p>
        } else {
            return null
        }
    }

    const getGuaranteeInfo = () => {
        return <div className={'item-page__finance-guarantee'}>{props.includedServices.map(service => <p
            key={service}>{service}</p>)}</div>
    }

    return (
        <section className={'item-page__finance'}>
            <p className={'item-page__finance-price'}>£{props.price}</p>
            {getDisplaySpecialOffer()}
            {getGuaranteeInfo()}
        </section>
    )
};

export default ProductItemFinance
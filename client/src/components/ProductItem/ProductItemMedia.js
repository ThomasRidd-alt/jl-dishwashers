import SquareImage from "../SquareImage";

const ProductItemMedia = props => {
    return (
        <section className={'dishwasher-section-container item-page__main-column-section'}>
            <div className={'item-page__images-container'}>
                <SquareImage alt={props.images.altText} src={props.images.urls[0]}/>
            </div>
        </section>
    )
};

export default ProductItemMedia
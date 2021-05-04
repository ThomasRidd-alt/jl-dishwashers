import Carousel from "../Carousel/Carousel";

const ProductItemMedia = props => {
    return (
        <section className={'dishwasher-section-container item-page__main-column-section'}>
            <div className={'item-page__images-container'}>
                <Carousel images={props.images.urls}/>
            </div>
        </section>
    )
};

export default ProductItemMedia
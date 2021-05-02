import SquareImage from "../SquareImage";

const ProductItemMedia = props => {
    return (
        <section>
            <SquareImage alt={props.images.altText} src={props.images.urls[0]}/>
        </section>
    )
};

export default ProductItemMedia
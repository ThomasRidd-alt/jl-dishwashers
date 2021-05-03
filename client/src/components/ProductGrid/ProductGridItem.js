import SquareImage from "../SquareImage";
import {Link} from "react-router-dom";

const ProductGridItem = props => {
    const {title, code, image, price} = props.product
    return (
        <section className={'grid-page__card'}>
            <Link to={`/product/${code}`} className={'jl-no-link'}>
                <SquareImage src={image} alt={''}/>
                <h2 className={'jl-body-text'}>{title}</h2>
                <p className={'jl-body-text'}><strong>£{price}</strong></p>
            </Link>
        </section>
    );
};

export default ProductGridItem
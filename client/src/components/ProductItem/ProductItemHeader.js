import chevron from '../../images/chevron-left.svg'
import {Link} from "react-router-dom";

const ProductItemHeader = props => {
    return (
        <header className={'item-page__header'}>
            <div className={'dishwasher-width-container'}>
                <div className={'item-page__header-items-container'}>
                    <Link to={'/'}><img className={'item-page__header-back chevron'} src={chevron} alt={'back'}/></Link>
                    <h1 className={'item-page__header-title jl-heading'}>{props.title}</h1>
                </div>
            </div>
        </header>
    )
};

export default ProductItemHeader
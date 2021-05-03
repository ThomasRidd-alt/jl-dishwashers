import chevron from '../../images/chevron-left.svg'

const ProductItemHeader = props => {
    return (
        <header className={'item-page__header'}>
            <div className={'dishwasher-width-container'}>
                <div className={'item-page__header-items-container'}>
                    <a href={'/'}><img className={'item-page__header-back chevron'} src={chevron} alt={'back'}/></a>
                    <h1 className={'item-page__header-title jl-heading'}>{props.title}</h1>
                </div>
            </div>
        </header>
    )
};

export default ProductItemHeader
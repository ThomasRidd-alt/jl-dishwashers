import React, {Component} from "react";
import chevronRight from '../../images/chevron-right.svg'
import chevronUp from '../../images/chevron-up.svg'
import {getInfoSummary} from "./helpers";

class ProductItemInformation extends Component {

    constructor(props) {
        super(props)
        this.code = props.code;
        this.productInformation = props.productInformation;
        this.infoSummary = getInfoSummary(this.productInformation);
        this.state = {isOpen: false};
    }

    renderAccordion() {
        return (
            <div className={'item-page__accordion'}>
                <div className={`closed-panel ${this.state.isOpen ? 'visually-hidden' : ''}`} aria-hidden={'true'}>
                    <div className={'item-page__product-summary jl-body-text '}
                         dangerouslySetInnerHTML={{__html: this.infoSummary}}/>
                    <div className={`item-page__accordion-button open-button`}
                         onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                        <p className={'item-page__accordion-caption'}>Read more</p>
                        <img className={'chevron'} src={chevronRight} alt={''}/>
                    </div>
                </div>
                <div className={`open-panel ${this.state.isOpen ? '' : 'visually-hidden'}`}>
                    <div className={'item-page__product-information jl-body-text '}
                         dangerouslySetInnerHTML={{__html: this.productInformation}}/>
                    <div className={`item-page__accordion-button close-button`}
                         onClick={() => this.setState({isOpen: !this.state.isOpen})}
                         aria-hidden={'true'}>
                        <p className={'item-page__accordion-caption'}>Read less</p>
                        <img className={'chevron'} src={chevronUp} alt={''}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className={'dishwasher-section-container item-page__main-column-section'}>
                <h2 className={'item-page__section-heading jl-heading'}>Product information</h2>
                <p className={'jl-body-text'}>Product code: {this.code}</p>
                {this.renderAccordion()}
            </section>
        )
    }
}

export default ProductItemInformation
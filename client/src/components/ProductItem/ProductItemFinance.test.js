import React from "react";
import {mount} from 'enzyme';
import ProductItemFinance from "./ProductItemFinance";

describe('ProductItemFinance', () => {
    const props = {
        price: 1.00,
        displaySpecialOffer: 'abc',
        includedServices: ['service 1', 'service 2']
    }
    let component = mount(<ProductItemFinance {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

    it('renders guarantee as multiple paragraphs', () => {
        expect(component.find('.item-page__finance-guarantee').children().length).toEqual(2)
    })

    it('displays special offer when present', () => {
        component = mount(<ProductItemFinance {...props}/>);
        expect(component.find('.item-page__finance-special-offer').length).toEqual(1)
    })

    it('doesnt display special offer if empty string', () => {
        const alt_props = {
            price: 1.00,
            displaySpecialOffer: '',
            includedServices: ['service 1', 'service 2']
        }
        component = mount(<ProductItemFinance {...alt_props}/>);
        expect(component.find('.item-page__finance-special-offer').length).toEqual(0)
    })
})
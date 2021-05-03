import React from "react";
import {mount} from 'enzyme';
import ProductItemInformation from "./ProductItemInformation";

describe('ProductItemInformation', () => {
    const id = 1;
    const props = {
        code: 'abc',
        productInformation: '<p>sentence one</p><p>sentence two</p>'
    }
    const component = mount(<ProductItemInformation {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

    it('renders product information as html', () => {
        expect(component.find('.item-page__product-information').text()).not.toContain('<p>')
    })

    it('starts with read more section closed', () => {
        expect(component.state().isOpen).toEqual(false)

        expect(component.find('.closed-panel').hasClass('visually-hidden')).not.toEqual(true)
        expect(component.find('.open-panel').hasClass('visually-hidden')).toEqual(true)
    })

    it('opens the accordion with a click', () => {
        component.find('.open-button').simulate('click');

        expect(component.state().isOpen).toEqual(true)

        expect(component.find('.closed-panel').hasClass('visually-hidden')).toEqual(true)
        expect(component.find('.open-panel').hasClass('visually-hidden')).not.toEqual(true)
    })

})
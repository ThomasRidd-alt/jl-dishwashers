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
})
import React from "react";
import {shallow} from 'enzyme';
import ProductItemSpecification from "./ProductItemSpecification";

describe('ProductItemSpecification', () => {
    const id = 1;
    const props = {
        specification: [
            {name: 'attribute 1', value: 'value 1'},
            {name: 'attribute 2', value: 'value 2'},
            {name: 'attribute 3', value: 'value 3'}
        ]
    }
    const component = shallow(<ProductItemSpecification {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

    it('renders one row per attribute', () => {
        expect(component.find('.item-page__specification-row').length).toEqual(props.specification.length)
    })
})
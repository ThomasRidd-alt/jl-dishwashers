import React from "react";
import {mount} from 'enzyme';
import {mockProductItemData} from "../../data/productData";
import ProductItem from "./ProductItem";

describe('ProductItem', () => {
    const props = {
        product: mockProductItemData
    }

    let component = mount(<ProductItem {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

})
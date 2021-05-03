import React from "react";
import {shallow} from 'enzyme';
import {mockProductItemData} from "../../data/productData";
import ProductItem from "./ProductItem";

describe('ProductItem', () => {
    const props = {
        product: mockProductItemData
    }

    let component = shallow(<ProductItem {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

})
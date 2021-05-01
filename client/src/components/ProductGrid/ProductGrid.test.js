import {shallow} from "enzyme";
import React from "react";
import ProductGrid from "./ProductGrid";
import {mockProductData} from "../../data/productData";

describe('ProductGrid', () => {
    const component = shallow(<ProductGrid products={mockProductData}/>);

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders the right number of product items', () => {

        expect(component.find('ProductGridItem').length).toEqual(mockProductData.length);
    })
})

import {shallow} from "enzyme";
import React from "react";
import {mockProductData} from "../../data/productData";
import ProductGridItem from "./ProductGridItem";

describe('ProductGridItem', () => {

    it('renders with data', () => {
        const app = shallow(<ProductGridItem product={mockProductData[0]}/>);
        expect(app).toMatchSnapshot();
    })
})

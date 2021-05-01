import {shallow} from "enzyme";
import React from "react";
import ProductGridHeader from "./ProductGridHeader";
import {mockProductData} from "../../data/productData";

describe('ProductGridHeader', () => {


    it('renders correctly', () => {
        const app = shallow(<ProductGridHeader/>);
        expect(app).toMatchSnapshot();
    });

    it('renders correctly with data', () => {
        const app = shallow(<ProductGridHeader products={mockProductData}/>);
        expect(app).toMatchSnapshot();
    })
})

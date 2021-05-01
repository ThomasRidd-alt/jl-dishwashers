import {mount, shallow} from "enzyme";
import React from "react";
import ProductPage from "./ProductPage";
import {mockProductItemData} from "../data/productData";

jest.mock("../services/getProductWithId")

const flushPromises = () => new Promise(setImmediate);

const mock_match = {params: {id: 123}}

var page = shallow(<ProductPage match={mock_match}/>);
it('starts with the fetching status', () => {
    expect(page.state().isFetching).toEqual(true)
})


it('displays a product when loaded', async () => {
    page = mount(<ProductPage match={mock_match}/>);
    await flushPromises()
    expect(page.state().isFetching).toEqual(false)
    expect(page.state().product.title).toEqual(mockProductItemData.title)
})
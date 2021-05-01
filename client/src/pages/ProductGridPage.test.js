import {mount, shallow} from "enzyme";
import React from "react";
import ProductGridPage from "./ProductGridPage";

jest.mock("../services/getProducts")

const flushPromises = () => new Promise(setImmediate);

var page = shallow(<ProductGridPage/>);
it('starts with the fetching status', () => {
    expect(page.state().isFetching).toEqual(true)
})


it('populates a list of products', async () => {
    page = mount(<ProductGridPage/>);
    await flushPromises()
    expect(page.state().isFetching).toEqual(false)
    expect(page.state().products.length).toEqual(2)
})
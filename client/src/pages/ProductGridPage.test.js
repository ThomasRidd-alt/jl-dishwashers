import {mount, shallow} from "enzyme";
import React from "react";
import ProductGridPage from "./ProductGridPage";
import {flushPromises, RouterWrapper} from "../testHelpers";

jest.mock("../services/getProducts")

var page = shallow(<ProductGridPage/>);
it('starts with the fetching status', () => {
    expect(page.state().isFetching).toEqual(true)
})


it('populates a list of products', async () => {
    page = mount(<ProductGridPage/>, {wrappingComponent: RouterWrapper});

    await flushPromises()

    expect(page.state().isFetching).toEqual(false)

    expect(page.state().products.length).toEqual(2)
})
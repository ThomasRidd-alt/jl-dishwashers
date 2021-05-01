import React from 'react';
import {mount, shallow} from 'enzyme';
import App from './App';
import {MemoryRouter} from 'react-router'
import ProductPage from "../pages/ProductPage";
import ProductGridPage from "../pages/ProductGridPage";
import NotFoundPage from "../pages/NotFoundPage";

jest.mock("../services/getProducts")
jest.mock("../services/getProductWithId")

describe('App', () => {
    const app = shallow(<App/>);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    describe('routing', () => {
        it('renders the grid page at root', () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            );
            expect(wrapper.find(ProductGridPage)).toHaveLength(1);
            expect(wrapper.find(ProductPage)).toHaveLength(0);
            expect(wrapper.find(NotFoundPage)).toHaveLength(0);
        })

        it('renders the product page at product/:id', () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/product/123']}>
                    <App/>
                </MemoryRouter>
            );
            expect(wrapper.find(ProductGridPage)).toHaveLength(0);
            expect(wrapper.find(ProductPage)).toHaveLength(1);
            expect(wrapper.find(NotFoundPage)).toHaveLength(0);
        })


        it('renders the NotFoundPage if route not recognised', () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/random']}>
                    <App/>
                </MemoryRouter>
            );
            expect(wrapper.find(ProductGridPage)).toHaveLength(0);
            expect(wrapper.find(ProductPage)).toHaveLength(0);
            expect(wrapper.find(NotFoundPage)).toHaveLength(1);
        })
    })
})



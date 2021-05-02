import React from "react";
import {mount} from 'enzyme';
import ProductItemHeader from "./ProductItemHeader";

describe('ProductItemHeader', () => {
    const id = 1;
    const props = {
        title: 'Hello world'
    }
    const component = mount(<ProductItemHeader {...props}/>);

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

    it('renders as H1', () => {
        expect(component.find('h1').text()).toContain(props.title)
    })
})
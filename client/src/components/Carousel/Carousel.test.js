import React from "react";
import {shallow} from 'enzyme';
import Carousel from "./Carousel";

describe('Carousel', () => {
    const id = 1;
    const images = ['image1', 'image2', 'image3']
    let component = shallow(<Carousel images={images}/>);

    beforeEach(() => {
        component = shallow(<Carousel images={images}/>);
    })

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
    })

    it('renders the same number of frames as urls', () => {
        expect(component.find('.jl-carousel__slide').length).toEqual(images.length)
    })

    const visibleSlides = (component) => {
        return component.find('.jl-carousel__slide').length - component.find('.jl-carousel__slide--hidden').length
    }

    it('renders only one without the hidden class', () => {
        expect(visibleSlides(component)).toEqual(1)
    })

    it('starts with index 0', () => {
        expect(component.state().index).toEqual(0)
    })

    it('increments index on click next', () => {
        component.find('.jl-carousel__next').simulate('click');

        expect(component.state().index).toEqual(1)
    })

    it('decrements index on click previous', () => {
        component.find('.jl-carousel__next').simulate('click');
        expect(component.state().index).toEqual(1)

        component.find('.jl-carousel__previous').simulate('click');
        expect(component.state().index).toEqual(0);
    })


    it('loops back to end on click previous when at start', () => {
        component.find('.jl-carousel__previous').simulate('click');
        expect(component.state().index).toEqual(images.length - 1)
    })

    it('loops back to start when at the end', () => {
        component.find('.jl-carousel__previous').simulate('click');
        expect(component.state().index).toEqual(images.length - 1)

        component.find('.jl-carousel__next').simulate('click');
        expect(component.state().index).toEqual(0);
    })
})
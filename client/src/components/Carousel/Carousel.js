import React, {Component} from 'react';
import SquareImage from "../SquareImage";
import chevronLeft from '../../images/chevron-left.svg'
import chevronRight from '../../images/chevron-right.svg'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.images = props.images ? props.images : [];
        this.state = {index: 0};
    }

    prevSlide = () => {
        this.setState({index: this.state.index > 0 ? this.state.index - 1 : this.images.length - 1})
    }

    nextSlide = () => {
        this.setState({index: this.state.index < this.images.length - 1 ? this.state.index + 1 : 0})
    }

    render() {
        return (
            <div className={'jl-carousel'} aria-hidden={'true'}>
                <div className={'jl-carousel__image-container'}>
                    {this.images.map((image, index) => {
                        return (
                            <div
                                className={index === this.state.index ? 'jl-carousel__slide' : 'jl-carousel__slide jl-carousel__slide--hidden'}
                                key={`image-${index}`}>
                                <SquareImage src={image} alt={''}/>
                            </div>
                        )
                    })}
                    <button className={'jl-carousel__chevron-container jl-carousel__previous'} onClick={this.prevSlide}>
                        <img className={'chevron'} src={chevronLeft} alt={''}/>
                    </button>
                    <button className={'jl-carousel__chevron-container jl-carousel__next'} onClick={this.nextSlide}>
                        <img className={'chevron'} src={chevronRight} alt={''}
                        />
                    </button>
                </div>
                <div className={'jl-carousel__pip-container'}>
                    {this.images.map((image, index) => {
                        return (
                            <span
                                className={`jl-carousel__pip ${index === this.state.index ? 'jl-carousel__pip--solid' : ''}`}
                                key={`pip-${index}`}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;
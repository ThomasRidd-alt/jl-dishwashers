import React, {Component} from "react";
import {getProductWithId} from "../services/getProductWithId";
import ProductItemFetching from "../components/ProductItem/ProductItemFetching";
import ProductItemError from "../components/ProductItem/ProductItemError";
import ProductItem from "../components/ProductItem/ProductItem";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        let {id} = props.match.params;
        this.state = {
            isFetching: true,
            id: id,
            product: {}
        }
    }

    async componentDidMount() {
        const product = await getProductWithId(this.state.id);
        if (product) {
            this.setState({error: false, isFetching: false, product: product})
        } else {
            this.setState({error: true, isFetching: false, product: null})
        }
    }

    getComponentForPageState = () => {
        if (this.state.isFetching) {
            return <ProductItemFetching/>
        } else if (this.state.error) {
            return <ProductItemError/>
        } else {
            return <ProductItem product={this.state.product}/>
        }
    }

    render() {

        return this.getComponentForPageState();
    }
}

export default ProductPage
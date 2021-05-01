import React, {Component} from "react";
import {getProducts} from "../services/getProducts";
import ProductGridFetching from "../components/ProductGrid/ProductGridFetching";
import ProductGridError from "../components/ProductGrid/ProductGridError";
import ProductGrid from "../components/ProductGrid/ProductGrid";

class ProductGridPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: false,
            products: []
        }
    }

    async componentDidMount() {
        const products = await getProducts();
        if (products) {
            this.setState({error: false, isFetching: false, products: products})
        } else {
            this.setState({error: true, isFetching: false, products: null})
        }
    }

    mainContent = () => {
        if (this.state.isFetching) {
            return <ProductGridFetching/>
        } else if (this.state.error) {
            return <ProductGridError/>
        } else {
            return <ProductGrid products={this.state.products}/>
        }
    }

    render() {
        return (
            <div><h1>Product grid page</h1>
                {this.mainContent()}
            </div>
        );
    }
}

export default ProductGridPage
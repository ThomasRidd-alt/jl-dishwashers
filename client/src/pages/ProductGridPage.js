import React, {Component} from "react";

const PRODUCT_GRID_API_URL = 'http://localhost:3000/api/product-grid'

class ProductGridPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            products: []
        }
    }


    fetchProducts = () => {
        this.setState({...this.state, isFetching: true});

        fetch(PRODUCT_GRID_API_URL)
            .then(response => response.json())
            .then(result => {
                this.setState({products: result, isFetching: false})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.fetchProducts();
    }

    render() {
        return (
            <div><h1>Product grid page</h1>
                <p>{this.state.products.length} products</p>
            </div>

        );
    }
}

export default ProductGridPage
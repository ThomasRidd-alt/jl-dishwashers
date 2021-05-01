import React, {Component} from "react";

const PRODUCT_GRID_API_URL = 'https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI'

class ProductGridPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            products: []
        }
    }


    fetchProducts = () => {
        console.log('fetching')
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
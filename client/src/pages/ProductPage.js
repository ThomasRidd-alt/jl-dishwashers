import React, {Component} from "react";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            product: {}
        }
    }

    render() {
        return (
            <div>Product page</div>
        );
    }
}

export default ProductPage
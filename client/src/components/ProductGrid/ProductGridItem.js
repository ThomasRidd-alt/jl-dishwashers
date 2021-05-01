const ProductGridItem = props => {
    const {title, code, image, price} = props.product
    return (
        <section className={'productGridItem'}>
            <p>Image: {image}</p>
            <p>Title: {title}</p>
            <p>Code: {code}</p>
            <p>Price: {price}</p>
            {/*<SquareImage src={props} ariaLabelledBy={`product-title-${code}`} />*/}
            <p id={`product-title-${code}`}></p>
        </section>
    );
};

export default ProductGridItem
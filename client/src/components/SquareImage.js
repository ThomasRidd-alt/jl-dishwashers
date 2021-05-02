const SquareImage = props => {
    return (
        <div className={'square-image-container'}>
            <img className={'square-image'} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default SquareImage;
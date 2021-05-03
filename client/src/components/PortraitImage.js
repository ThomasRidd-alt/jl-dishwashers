const PortraitImage = props => {
    return (
        <div className={'portrait-image-container'}>
            <img className={'portrait-image'} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default PortraitImage
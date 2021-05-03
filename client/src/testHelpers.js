import {MemoryRouter} from "react-router";

function RouterWrapper(props) {
    const {children} = props;
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}

export {RouterWrapper}
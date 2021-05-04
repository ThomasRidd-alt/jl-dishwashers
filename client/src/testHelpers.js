import {MemoryRouter} from "react-router";

const flushPromises = () => new Promise(setImmediate);

function RouterWrapper(props) {
    const {children} = props;
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}

export {RouterWrapper, flushPromises}
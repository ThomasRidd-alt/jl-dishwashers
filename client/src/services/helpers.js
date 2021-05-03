const isProduction = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return false;
    } else {
        return true;
    }
}

export {isProduction}
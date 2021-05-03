const getInfoSummary = info => {
    const open = info.indexOf("<p>")
    const close = info.indexOf("</p>")
    if (open >= 0 && close > open) {
        return info.substring(open + 3, close)
    }
    return info
}

export {getInfoSummary}
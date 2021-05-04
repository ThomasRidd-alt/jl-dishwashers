const getInfoSummary = info => {
    const open = info.toLowerCase().indexOf("<p>")
    const close = info.toLowerCase().indexOf("</p>")
    if (open >= 0 && close > open) {
        return info.substring(open + 3, close)
    }
    return info
}

export {getInfoSummary}
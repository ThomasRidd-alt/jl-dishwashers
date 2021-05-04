import {getInfoSummary} from "./helpers";

describe('getInfoSummary', () => {

    it('returns a non html string as is', () => {
        const example = 'a non html string'
        expect(getInfoSummary(example)).toEqual(example)
    })

    it('removes `<p>` tags', () => {
        const example = '<p>an html string</p>'
        expect(getInfoSummary(example)).toEqual('an html string')
    })

    it('returns first paragraph only', () => {
        const example = '<p>an html string</p><p>another html string</p>'
        expect(getInfoSummary(example)).toEqual('an html string')
    })

    it('returns as is if the html is not applicable', () => {
        const example = '</p>an html string<p>'
        expect(getInfoSummary(example)).toEqual('</p>an html string<p>')
    })

    it('is case insensitive to tags', () => {
        const example = '<P>an html string</P><p>another html string</p>'
        expect(getInfoSummary(example)).toEqual('an html string')
    })
})
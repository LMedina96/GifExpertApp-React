/**
 * @jest-enviroment jsdom
 */

import GifGridItem from "../../src/components/GifGridItem"
import {render, screen} from '@testing-library/react'

describe('<GifGridItem /> Component Tests', () => {

    const title = 'Dragon Ball Z'
    const url = 'https://dragonballzgifs.com/u'

    test('should match with the snapShot', () => {
        const gifGridRender = render(<GifGridItem title={title} url={url}/>);
        expect(gifGridRender).toMatchSnapshot();
    })

    test('Should show the image and URL indicated', () => {
        render(<GifGridItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Should show the title in the component', () => {
        render(<GifGridItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy()
    })
})
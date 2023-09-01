import GifExpertApp from '../src/GifExpertApp'
import {fireEvent, render, screen} from '@testing-library/react'

describe('<GifExpertApp /> tests', () => {
    test('should add a category if this not already exist', () => {

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: 'Dragon Ball Z'}})
        fireEvent.submit(form)

        screen.debug()
    });
});
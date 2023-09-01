import {fireEvent, render, screen} from '@testing-library/react'
import AddCategory from "../../src/components/AddCategory"

describe('<AddCategory /> Tests', () => {
    test('Should change the value in the textBox', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Dragon Ball Z'}})

        expect(input.value).toBe('Dragon Ball Z')
    })
    
    test('Should call onNewCategory if this have an existent value ', () => {
        const inputValue = 'Dragon Ball Z'
        const onNewCategory = jest.fn()

        render (<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    });

    test('should not call the onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn()

        render (<AddCategory onNewCategory={onNewCategory} />)
        
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)
    });

})
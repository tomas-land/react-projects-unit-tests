import SearchSimilarWords from "./SearchSimilarWords";
import {render, screen, userEvent, fireEvent} from '../../utils/test_utils.tsx'
import { vi } from 'vitest'
import { useGetSimilarWords } from '@/hooks/useGetSimilarWords';
import  sum  from './SearchSimilarWords'

describe('UI TESTS', () => {
    //checking if component renders
    it('should render', () => {
        render(<SearchSimilarWords />)
    })
    // checking if input is visible
    it('input is visible', () => {
        render(<SearchSimilarWords />)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })
    // checking if button is visible
    it('button is visible', () => {
        render(<SearchSimilarWords />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    // checking if similar words are visible
    it('similar words are visible', () => {
        render(<SearchSimilarWords />)
        const similarWords = screen.getByText('Similar words:')
        expect(similarWords).toBeInTheDocument()
    })
    // checking if loading text is visible
    // it('loading text is visible', () => {
    //     render(<SearchSimilarWords />)
    //     const loading = screen.getByText('loading...')
    //     expect(loading).toBeInTheDocument()
    // })
})

describe('FUNCTIONALITY TESTS', () => {

    it('should call getSimilarWords', () => {
        
    })
  // mock the useGetSimilarWords hook to return list of similar words
//   const mock = vi.fn()
// mock.mockReturnValue(42)
// console.log('first',mock())
// mock() 
//     })
    // test sum function ,should add two numbers correctly
   
   
       // vi.mock('useGetSimilarWords', () => ({
    //     isLoading: false,
    //     similarWords: [],
    //     getSimilarWords: vi.fn()
    // }))

    // it('should call getSimilarWords', () => {
    //     render(<SearchSimilarWords />)
    //     const input = screen.getByRole('textbox')
    //     const button = screen.getByRole('button')
    //     userEvent.type(input, 'fox')
    //     userEvent.click(button)
    //     expect(useGetSimilarWords.getSimilarWords).toHaveBeenCalledWith('fox')
    // })
    // checking if input is working
    // it('input is working', () => {
    //     render(<SearchSimilarWords />)
    //     const input = screen.getByRole('textbox')
    //     expect(input).toBeInTheDocument()
    //     userEvent.type(input, 'test')
    //     expect(input).toHaveValue('test')
    // })
    // // checking if button is working
    // it('button is working', () => {
    //     render(<SearchSimilarWords />)
    //     const input = screen.getByRole('textbox')
    //     const button = screen.getByRole('button')
    //     userEvent.type(input, 'test')
    //     userEvent.click(button)
    //     const similarWords = screen.getByText('Similar words:')
    //     expect(similarWords).toBeInTheDocument()
    // })
    // // checking if similar words are visible
    // it('similar words are visible', () => {
    //     render(<SearchSimilarWords />)
    //     const input = screen.getByRole('textbox')
    //     const button = screen.getByRole('button')
    //     userEvent.type(input, 'test')
    //     userEvent.click(button)
    //     const similarWords = screen.getByText('Similar words:')
    //     expect(similarWords).toBeInTheDocument()
    // })
    // // checking if loading text is visible
    // it('loading text is visible',async () => {
    //     render(<SearchSimilarWords />)
    //     const input = screen.getByRole('textbox')
    //     const button = screen.getByRole('button')
    //     userEvent.type(input, 'test')
    //     userEvent.click(button)
    //     const loading = screen.getByText('loading...')
    //     expect(loading).toBeInTheDocument()
    // })
})
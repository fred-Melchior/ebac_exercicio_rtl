import { fireEvent, render, screen } from "@testing-library/react"
import Post from ".."


describe('Teste para o componente de comentários', () => {
    test('Deve renderizar corretamente', () => {
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar 2 (dois) comentários', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('comentario 1')).toBeInTheDocument()
        expect(screen.getByText('comentario 2')).toBeInTheDocument()
    })
})
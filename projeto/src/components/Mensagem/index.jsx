import './syle.css'

function Mensagem() {
    return (
        // Comandos HTML.
        <div className='mensagem'>
            <h1>Componente</h1>

            <Mensagem/>
            <p>Este é um componente com uma mensagem simples.</p>
        </div>
    )
}
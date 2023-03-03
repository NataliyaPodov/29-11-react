import React from 'react'
import ReactDOM from 'react-dom/client'

/* Стрелочная функция */

const App = () => {
    return (
        <div>
            {' '}
            <h1>Hello App component</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam consequuntur voluptatibus vel doloremque placeat
                debitis? Dolor minima, amet optio tempore consequatur vitae
                voluptatum pariatur mollitia dolorem tempora, adipisci, voluptas
                delectus?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                eos nihil tempore, veniam harum reprehenderit, voluptatem quod
                neque magnam amet culpa suscipit minima delectus necessitatibus
                eaque deleniti, ipsa nisi. Itaque!
            </p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

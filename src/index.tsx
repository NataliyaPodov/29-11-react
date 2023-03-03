import React from 'react'
import ReactDOM from 'react-dom/client'
import { Title } from './Title'

/* Стрелочная функция */

const Content = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

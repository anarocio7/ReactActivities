import React from 'react'
import ReactDOM from 'react-dom'

const user1 = {
    name: 'Ana Betancourt',
    age: 32,
    country: 'México'
}

const TarjetaFruta = (props) => (
    <div>
        <h3>{props.name}</h3>
        <hr/>
        <p>$ {props.price}</p>
    </div>
)
    

function getInfo(user){
    return `Hola mi nombre es ${user.name}, tengo ${user.age} años y vivo en ${user.country}`
}
const App = <h1>{getInfo(user1)}
    <div>
        <TarjetaFruta name='Sandía' price={2.2}/>
        <TarjetaFruta name='Manzana'/>
        <TarjetaFruta name='Kiwi'/>
    </div>
</h1>

const root = document.getElementById('root');

ReactDOM.render(App, root);

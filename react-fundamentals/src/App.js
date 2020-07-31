import React from 'react'
import TarjetaFruta2 from './components/TarjetaFruta/TarjetaFruta'

const Cat = (props) => (
    <div>
        <h1>Cat</h1>
        <pre>
            { JSON.stringify(props, null, 4) }
        </pre>
    </div>
)

// Keeping events with react

class EventPersistance extends React.Component {
    state = {
        color: 'blue'
    }
    handlerChange = (event) => {
        const color = event.target.value
        this.setState (state => ({
            color
        }))
    }
    render () {
        return (
            <div>
                <input type="text"
                       onChange={this.handlerChange} />
                <h1
                    style= {{ color: this.state.color}}>
                        {this.state.color}
                </h1>
            </div>
        )
    }
}

class Counter extends React.Component {
    state = {
        clicks: 0
    }

    add = () => {
        this.setState((state, props) => {
            return {
                clicks: state.clicks +1
            }
        })
    }
    render(){
        return (
            <button onClick= {this.add}>
                Clicks ({this.state.clicks})
            </button>
        )
    }
}


const App = 
    <div>
        <TarjetaFruta2 name = 'Watermelon' price = {6}/>
        <Counter />
        <Cat />
        <a href="www.google.com">Google</a>
        <EventPersistance />
    </div>

export default App
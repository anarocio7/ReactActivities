import React from 'react'
import TarjetaFruta2 from './components/TarjetaFruta/TarjetaFruta'
import './global.css'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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

// Create personalized events

class Child extends React.Component {
    render () {
        return (
            <div className='box blue'>
                <h2>Child Component</h2>
                <button
                    onClick={this.props.onGreeting}>Say Hi</button>
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

// Conditionals inside components

const Greeting = (props) => {
    if(props.hi){
        return (
            <h2>Hi! My friend</h2>
        )
    }

    return (
        <p>Sorry, no hi for you</p>
    )
}

// Introducing props children

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

// Iterating lists on react

const Computers = () => (
    <React.Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Keyboard</li>
    </React.Fragment>
)

const Clothing = () => (
    <React.Fragment>
        <li>Shirt</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </React.Fragment>
)

// Understanding react portals

class PortalModal extends React.Component {
    render(){
        return (
            ReactDOM.createPortal((
                <div>
                    <h2>Portal</h2>
                </div>
            ), document.getElementById('modal-root'))
        )
    }
}

// PropTypes

class Profile extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }

    static defaultProps = {
        bio: 'Learning React'
    }

    render() {
        const {name, bio, email, age} = this.props
        return (
        <div>
            <h2>{ name }</h2>
                <p>{ bio }</p>
                    <a href={[`mailto: ${email}`]}>{ email }</a>
                <p>{ age }</p>
        </div>
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
        <div className='box red'>
            <Child />
        </div>
        <div>
            <Greeting />
        </div>
        <div className="font">
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                 Welcome
                </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
            </FancyBorder>
        </div>
        <div className="font">
            <ul>
                <Computers />
                <Clothing />
            </ul>
        </div>
        <div className="font">
            <Profile 
                name= 'Ana'
                email= 'myemail@something.com'
                age={32}/>
        </div>
    </div>


export default App
import React from 'react';

class TarjetaFruta2 extends React.Component {
    constructor() {
        super()
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)

        const METHODS = [
            'add',
            'delete',
            'clean'
        ]
        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })
        this.state = {
            cantidad: 50
        }
    }
    add() {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    delete () {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }
    clean () {
        this.setState({
            cantidad: 0
        })
    }
    render() {
        return (
            <div>
            <h3>{this.props.name}</h3>
                <div>Amount: {this.state.cantidad}</div>
                <button onClick = {this.add}>Add</button>
                <button onClick = {this.delete}>Delete</button>
                <button onClick = {this.clean}>Clean</button>
            <hr/>
            <p>$ {this.props.price}</p>
        </div>
        )
    }
}

export default TarjetaFruta2
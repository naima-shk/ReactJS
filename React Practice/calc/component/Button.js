import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <Button class='calc-button'>{this.props.symbol}</Button>
            </div>
        )
    }
}

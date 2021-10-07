import React, { Component } from "react";

export default class ToastWarning extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text_valor: "",
            color_valor: "",
        }

    }

    render() {
        return (
            <a href="#" className="toastt d-flex p-4 align-items-center rounded" style={{backgroundColor: this.props.color, position: 'fixed', bottom: 0, left: 0, margin: '20px 30px'}}>
              <label style={{marginRight: 20}}>{this.props.text}</label>
            </a>
        )
    }
}
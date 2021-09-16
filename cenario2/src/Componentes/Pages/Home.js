import React, { Component } from "react";

import Card from '../Card'
import Popup from "../Popup";

import Image from '../../Images/teste3.jpg'
import Image2 from '../../Images/teste1.jpg'
import Image3 from '../../Images/teste2.jpg'

export default class Home extends Component {

    render() {
        return (
            <>
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image} num="1" />
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image2} num="2" />
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image3} num="3" />
            </>
        )
    }
}
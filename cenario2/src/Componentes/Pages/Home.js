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
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image} />
                <Popup title="Lorem Ipsum1" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et." />
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image2} />
                <Popup title="Lorem Ipsum2" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et." />
                <Card title="Lorem Ipsum" sub="Lorem Ipsum amet." bgimg={Image3} />
                <Popup title="Lorem Ipsum3" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et." />
            </>
        )
    }
}
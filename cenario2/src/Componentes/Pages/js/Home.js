import React, { Component } from "react";

import Card from '../../js/Card'
import video1 from '../../../Images/video1.mp4'
import video2 from '../../../Images/video2.mp4'
import video3 from '../../../Images/video3.mp4'

import Image from '../../../Images/teste3.jpg'
import Image2 from '../../../Images/teste1.jpg'
import Image3 from '../../../Images/teste2.jpg'

export default class Home extends Component {

    render() {
        return (
            <>
                <Card title="Lorem Ipsum" video={video1} sub="Lorem Ipsum amet." bgimg={Image} num="1" />
                <Card title="Lorem Ipsum" video={video2} sub="Lorem Ipsum amet." bgimg={Image2} num="2" />
                <Card title="Lorem Ipsum" video={video3} sub="Lorem Ipsum amet." bgimg={Image3} num="3" />
            </>
        )
    }
}
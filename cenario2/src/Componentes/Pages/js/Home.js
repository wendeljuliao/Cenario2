import React, { Component } from "react";

import Card from '../../js/Card'


import video1 from '../../../Images/video1.mp4'
import video2 from '../../../Images/video2.mp4'
import video3 from '../../../Images/video3.mp4'

import Image from '../../../Images/teste3.jpg'
import Image2 from '../../../Images/teste1.jpg'
import Image3 from '../../../Images/teste2.jpg'
import playlist from "../../../playlist";
import { Link } from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="container">

                        <div class="row">

                            {playlist.map((item) => {
                                return (
                                    <Link to={`/playlist/${item.id}`}><Card key={item.id} title={item.title} sub={item.sub} bgimg={item.imagem} num={item.id} /></Link>
                                )
                            }
                            )}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
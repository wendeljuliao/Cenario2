import React, { Component } from "react";

import Card from '../../js/Card'

import playlist from "../../../Mocks/playlist";
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
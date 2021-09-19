import './../css/Popup.css'
import { Component } from 'react';

export default class Popup extends Component {

    constructor(props) {
        super(props);
        this.teste = this.teste.bind(this)

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            id_valor: "",
            video_valor: "",
        }
    }

    teste() {
        document.getElementById("popup" + this.props.id).style.display = 'none'

    }


    render() {
        return (
            <div class="popup-bg" id={"popup" + this.props.id} >
                <div class="escopo-popup">
                    <video muted autoPlay loop>
                        <source src={this.props.video} type="video/mp4" />
                    </video>
                    <a href="#" id="close" onClick={this.teste}></a>
                    <div style={{ width: '100%' }}>
                        <label class="title-popup">{this.props.title + this.props.id}</label>
                        <label class="sub-popup">{this.props.sub}</label>
                    </div>
                </div>
            </div>

        )
    }
}

import './Popup.css'
import video from '../Images/video.mp4'
import { Component } from 'react';

export default class Popup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            id_valor: "",
        }
    }


    render() {
        return (
            <div>
                <div class="popup-bg" id={"popup1"} >
                    <div class="escopo-popup">
                        <video muted autoPlay loop>
                            <source src={video} type="video/mp4" />
                        </video>
                        <a href="#" id="close" onClick={function () { document.getElementById("popup1").style.display = 'none' }}></a>
                        <div style={{ width: '100%' }}>
                            <label class="title-popup">{this.props.title+"1"}</label>
                            <label class="sub-popup">{this.props.sub}</label>
                        </div>
                    </div>
                </div>

                <div class="popup-bg" id={"popup2"} >
                <div class="escopo-popup">
                    <video muted autoPlay loop>
                        <source src={video} type="video/mp4"/>
                    </video>
                    <a href="#" id="close" onClick={function() {document.getElementById("popup2").style.display = 'none'}}></a>
                    <div style={{width: '100%'}}>
                        <label class="title-popup">{this.props.title+"2"}</label>
                        <label class="sub-popup">{this.props.sub}</label>
                    </div>
                </div>
            </div>

            <div class="popup-bg" id={"popup3"} >
                <div class="escopo-popup">
                    <video muted autoPlay loop>
                        <source src={video} type="video/mp4"/>
                    </video>
                    <a href="#" id="close" onClick={function() {document.getElementById("popup3").style.display = 'none'}}></a>
                    <div style={{width: '100%'}}>
                        <label class="title-popup">{this.props.title+"3"}</label>
                        <label class="sub-popup">{this.props.sub}</label>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

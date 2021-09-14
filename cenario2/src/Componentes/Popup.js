import './Popup.css'
import video from '../Images/video.mp4'
import { Component } from 'react';

export default class Popup extends Component{

    constructor(props){
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
            
            <div class="popup-bg" id="popup" >
                <div class="escopo-popup">
                    <video muted autoPlay loop>
                        <source src={video} type="video/mp4"/>
                    </video>
                    <a href="#" id="close" onClick={function() {document.getElementById("popup").style.display = 'none'}}></a>
                    <div style={{width: '100%'}}>
                        <label class="title-popup">{this.props.title}</label>
                        <label class="sub-popup">{this.props.sub}</label>
                    </div>
                </div>
            </div>
        
        )
    }
}

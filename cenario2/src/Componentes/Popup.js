import './Popup.css'
import video from '../Images/video.mp4'

export default function Header() {

    return (
        
        <div class="popup-bg" id="popup">
            <div class="escopo-popup">
                <video muted autoPlay>
                    <source src={video} type="video/mp4"/>
                </video>
                <a href="#" id="close" onClick={function() {document.getElementById("popup").style.display = 'none'}}></a>
                <label class="title-popup">Lorem ipsum</label>
                <label class="sub-popup">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl quis magna vehicula blandit. Sed vitae mattis diam. Aenean dapibus nibh tellus, vitae pretium metus sollicitudin et.</label>
            </div>
        </div>
    
    )
}

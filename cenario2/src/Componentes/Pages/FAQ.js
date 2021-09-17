import './Faq.css'
import React, { Component } from "react";
import Pergunta from '../Pergunta';

export default class FAQ extends Component {

    click() {
        var elemento = document.getElementById("ites-faq1")
        if (elemento.style.display == "flex")
            elemento.style = "display: none;";
        else
            elemento.style = "display: flex;"
    }

    render() {
        return (
            <div class="escopo-primary">
                <div class="escopo-secundary">
                    <div class="logo-faq">
                        <img src="https://images.emojiterra.com/twitter/512px/1f9d0.png" />
                        <label class="title1">Como podemos ajudar?</label>
                        <label class="title2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.</label>
                    </div>
                    <nav class="lista-faq">
                        <Pergunta id="1" title="O Covid-19 atrapalhou algo na empresa?" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur mollis tortor id faucibus. Duis sagittis commodo sodales. Mauris a vestibulum diam, ut aliquam risus. Quisque non dolor magna. Nunc lobortis mauris mi, vel venenatis quam tempus eget. Integer luctus nisl vel quam accumsan fermentum. Vivamus pellentesque odio nec porta venenatis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur mollis tortor id faucibus. Duis sagittis commodo sodales. Mauris a vestibulum diam, ut aliquam risus. Quisque non dolor magna. Nunc lobortis mauris mi, vel venenatis quam tempus eget. Integer luctus nisl vel quam accumsan fermentum. Vivamus pellentesque odio nec porta venenatis." />
                        <Pergunta id="2" title="As músicas tocadas podem ser ouvidas a qualquer momento?" sub="Duis pretium viverra pellentesque. Praesent pellentesque commodo lectus faucibus tempus. Suspendisse mattis sagittis porta. Sed vulputate, massa eu facilisis sodales, ligula nisi venenatis est, a scelerisque tellus ex ut augue. Nunc ut tempus arcu. Nulla id ullamcorper velit. Etiam eget dignissim risus. Nullam tincidunt semper eros id porttitor. Cras ut leo interdum, maximus dui quis, feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lorem nisi, facilisis a eros porttitor, sagittis pellentesque tellus.Duis pretium viverra pellentesque. Praesent pellentesque commodo lectus faucibus tempus. Suspendisse mattis sagittis porta. Sed vulputate, massa eu facilisis sodales, ligula nisi venenatis est, a scelerisque tellus ex ut augue. Nunc ut tempus arcu. Nulla id ullamcorper velit. Etiam eget dignissim risus. Nullam tincidunt semper eros id porttitor. Cras ut leo interdum, maximus dui quis, feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lorem nisi, facilisis a eros porttitor, sagittis pellentesque tellus." />
                        <Pergunta id="3" title="Problemas com conexão?" sub="Nullam pellentesque, quam et aliquet sagittis, urna orci pellentesque massa, quis facilisis sapien urna sed diam. Sed at fermentum quam. Curabitur sit amet iaculis nibh. Praesent iaculis tincidunt magna sit amet dapibus. Fusce tristique mattis mi, at malesuada velit placerat et. Etiam laoreet massa sit amet tellus cursus ullamcorper. Sed sapien augue, iaculis ut consectetur sit amet, luctus id est. Pellentesque in facilisis metus, in porttitor metus.Nullam pellentesque, quam et aliquet sagittis, urna orci pellentesque massa, quis facilisis sapien urna sed diam. Sed at fermentum quam. Curabitur sit amet iaculis nibh. Praesent iaculis tincidunt magna sit amet dapibus. Fusce tristique mattis mi, at malesuada velit placerat et. Etiam laoreet massa sit amet tellus cursus ullamcorper. Sed sapien augue, iaculis ut consectetur sit amet, luctus id est. Pellentesque in facilisis metus, in porttitor metus." />
                        <Pergunta id="4" title="Dúvidas sobre planos" sub="Vivamus ultrices mollis tortor at pellentesque. Phasellus congue auctor odio, ac vulputate elit sagittis non. Donec eget vehicula tortor. Vestibulum diam urna, congue id mi eu, ullamcorper suscipit ligula. Mauris ut purus nisi. Donec elementum auctor magna ac mollis. Integer vestibulum id enim at vehicula. Proin luctus fermentum libero nec lacinia. Pellentesque ligula lorem, hendrerit vitae fringilla at, imperdiet vitae quam. In porttitor rutrum egestas. Nullam finibus faucibus accumsan. In sed metus sed dolor hendrerit facilisis vitae vitae urna. Integer fermentum erat dolor, ut tincidunt sem viverra eget. Donec dapibus nunc vel diam feugiat, sed lacinia elit commodo. Nam iaculis tortor semper urna sollicitudin, eget dictum tortor rutrum. Suspendisse blandit tempus tortor in consectetur." />
                        <Pergunta id="5" title="Como aderir o plano Premium" sub="Ut malesuada lacinia nulla sed viverra. Nunc non sem imperdiet, faucibus dolor id, condimentum lacus. Nunc suscipit nunc et scelerisque feugiat. Ut aliquet at arcu facilisis pellentesque. Fusce id venenatis dui. Aliquam id malesuada ipsum. Pellentesque accumsan sed sapien at rhoncus. Nullam rhoncus eros id quam dapibus, et iaculis lorem hendrerit. Quisque ultricies in urna a porttitor." />
                        <Pergunta id="6" title="Morty do mal vai retornar?" sub="Sed placerat cursus libero at tempus. Mauris et lobortis lectus. Proin blandit fringilla ultrices. Suspendisse sollicitudin, massa non pretium interdum, ante turpis ultricies odio, id fermentum odio lectus vel erat. Nam fringilla est nec dui vehicula, sit amet interdum nisi posuere. Phasellus condimentum, urna luctus malesuada ultricies, enim mauris ornare enim, vitae tempor quam mi pharetra tortor. Ut pulvinar blandit dui, sit amet tempor risus imperdiet sit amet." />
                            
                    </nav>
                </div>
            </div>
        )
    }

}

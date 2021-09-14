import './faq.css';

function faq() {
  return (
    <div>
        <div class="box">
            <a class="button" href="#popup" id="button0" onclick="call_pop_up()">Covid e tals</a>
        </div>
        <div id="popup" class="overlay">
            <div class="popup">
                <h2 id="titulo_pergunta"></h2>
                <a class="close" href="#">&times;</a>
                <div class="content" id="conteudo_pergunta"></div>
            </div>
        </div>
    </div>
  );
}

function call_pop_up() {
    document.getElementById("titulo_pergunta").innerHTML = document.getElementById("button0").textContent
}

export default faq;

import './../css/Github.css';
import Person from '../../js/Person'
import logo from '../../../Images/git-logo.png'

import gabriel from '../../../Images/teste1.jpg'
import wendel from '../../../Images/teste2.jpg'
import paulo from '../../../Images/teste3.jpg'
import gabriel1 from '../../../Images/jg.jpg'
import wendel2 from '../../../Images/wj.jpg'
import paulo3 from '../../../Images/ph.jpg'

function Github() {
  return (
    <div>
        <div class="escopo-primary">
            <div class="escopo-secundary">
                <img class="git-logo" src={logo}></img>
                <Person nome="Gabriel Cunha" insta="j.gabriel.cj" git="João Gabriel Cunha Jataí" imgfront={gabriel} imgback={gabriel1}/>
                <Person nome="Wendel Julião" insta="wendel_juliao" git="Wendel Julião" imgfront={wendel} imgback={wendel2}/>
                <Person nome="Paulo Henrique" insta="paulo_7676" git="Paulo Henrique Costa Ribeiro" imgfront={paulo} imgback={paulo3}/>
            </div>
        </div>
    </div>

  );
}

export default Github;

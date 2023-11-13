import './designsection7.css'
import Deno2 from '../../img/redesign-dino.webp'

const Designsection7 = () =>{
    return(<div className='desec7'>
        <div className='desec7-left'>
          <h1>REDESIGN DE SITES WEB</h1>
          <hr/>
          <h2>Qu'est-ce que le redesign de siteweb ?</h2>
          <p>le<span> redesign de siteweb</span> définit l'action de reprendre
           un site web existant, en conservant la majeure partie du contenu existant
            mais en modifiant les multiples éléments de conception.</p>
          <h2>Pourquoi devrais-je procéder à un redesign de mon site web ?</h2>
          <p>Vous devriez revoir la conception de votre site web</p>
          <ul>
            <li>Si vous avez l'impression que votre site web n'atteint pas les objectifs que vous lui avez fixés,</li>
            <li>Si vous estimez que la conception et la navigabilité de votre site web sont dépassées,</li>
            <li> Si l'objectif de votre site web a changé</li>
            <li>Si vous souhaitez mettre en œuvre une stratégie de référencement sérieuse.</li>
          </ul>
        </div>
        <div className='desec7-right'>
         <img src={Deno2}/>
        </div>

    </div>)
}

export default Designsection7
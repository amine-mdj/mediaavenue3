import './designsection4.css'
import User from '../../img/user-experience.webp'

const Designsection4 = () =>{
    return(<div className='desec4'>
        <div className='desec4-left'>
            <img src={User}/>
        </div>
        <div className='desec4-right'>
            <h1>UX DESIGN</h1>
            <hr/>
            <div className='desec4-desc'>
                <h2>Qu'est-ce qu'une conception de site web basé sur l'expérience utilisateur (UX design) ?</h2>
                <p>Le design UX décrit le processus qui consiste à se concentrer sur la
                     satisfaction de l'utilisateur pour construire le design d'un site
                      web en améliorant la navigation entre les pages, en renforçant
                       son accessibilité et en augmentant le plaisir que le visiteur
                        aura à naviguer sur votre site web.</p>
                       <h2>Pourquoi devrais-je me concentrer sur l'expérience utilisateur lors de la conception de mon site web ?</h2>
                       <p>Il y a tant de bonnes raisons de se concentrer sur l'expérience
                         utilisateur lorsque l'on travaille sur la conception de son site web.
                          En voici quelques-unes :</p>
                         <ul>
                            <li>Il retient les clients plus longtemps sur votre site web</li>
                            <li>Il convertit mieux les visiteurs en acheteurs/abonnés</li>
                            <li>Il améliore l'image de votre marque et accroît la fidélité de vos clients.</li>
                            <li>Il crée de nouveaux contacts car il est plus susceptible d'être recommandé.</li>
                         </ul>
            </div>
        </div>
    </div>)
}

export default Designsection4
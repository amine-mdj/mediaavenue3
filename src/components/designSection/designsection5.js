import './designsection5.css'
import Warch from '../../img/website-architecture2.webp'

const Designsection5 = () =>{
    return(<div className='desec5'>
        <div className='desec5-left'>
            <h1>POURQUOI L'AGENCE MEDIA AVENUE POUR MON SITE INTERNET  <br/> OPTIMISÉ UX ?</h1>
            <hr/>
            <p>Si vous <span>avez déjà un site web</span> , nous travaillerons sur le design UX de votre site web en nous basant sur :</p>
            <div className='desec5-desc'>
                <p> Vos données <span>Google Analytics</span> (si vous avez déjà implémenté
                 le code de tracking ). Cet outil nous fournira de nombreuses informations
                  précieuses sur les caractéristiques démographiques de votre
                   public et sur la manière dont il interagit avec votre site web.
                    C'est sur la base de ces informations que nous pourrons élaborer
                     un plan de refonte partielle.</p>
                <p><span>L'architecture de votre site web : </span> L'architecture
                 du site web est cruciale en matière d'accessibilité. La navigation
                  sur votre site doit être naturelle et correspondre aux attentes
                   et aux habitudes de l'utilisateur.</p>
            </div>
        </div>
        <div className='desec5-right'>
            <img src={Warch}/>
        </div>
    </div>)
}

export default Designsection5
import Homegriditem from './homegriditem'
import './homesection2.css'

//--------------images

import Design from '../img/Design3.webp'
import Programming from '../img/programing.webp'
import Seo from '../img/seo.webp'
import Analytics from '../img/web-analytics.webp'
import Ads from '../img/ads.webp'
import Securite from '../img/securite.webp'
import Reputation from '../img/reputation.webp'
import Mobile from '../img/mobile apps.webp'


const Homesection2 = () =>{
    const description = {
         design:"Notre équipe de designers web combine l'art et la technologie pour créer des sites web et des application esthétiquement captivants.",
         mobile:"Création d'applications mobiles intuitives et performantes pour Android et iOS, offrant une expérience utilisateur exceptionnelle.",
        prog:"réalisation de sites Web rapides, faciles à mettre à jour et optimisés pour les moteurs de recherche",
        secu:"Mise en place de mesures de sécurité avancées pour protéger vos données et instaurer la confiance de vos clients.",
        seo:'Optimisation pour améliorer le classement et la visibilité, attirant ainsi un trafic qualifié.',
        analytics:"Utilisation d'outils d'analyse avancés pour des stratégies optimisées, basées sur des données concrètes, et des performances améliorées.",
        reputation:"Surveillance et gestion proactive de votre réputation en ligne pour maintenir une image positive de votre entreprise.",
        ads:'Campagnes publicitaires ciblées pour augmenter votre visibilité et vos ventes, tout en maximisant votre retour sur investissement.'
        
    };
    return (<div className='hmsec2'>
              <Homegriditem title='Web design' description={description.design} img={Design} />
              <Homegriditem title='La programmation web' description={description.prog} img={Programming} />
              <Homegriditem title="Développement d'Applications Mobiles" description={description.mobile} img={Mobile} />
              <Homegriditem title="Sécurité Web" description={description.secu} img={Securite} />
              <Homegriditem title='Stratégie de Référencement SEO' description={description.seo} img={Seo} />
              <Homegriditem title='Analyse de Données' description={description.analytics} img={Analytics} />
              <Homegriditem title='Gestion de Réputation' description={description.reputation} img={Reputation} />
              <Homegriditem title='Publicité en Ligne' description={description.ads} img={Ads} />
        </div>)
}

export default Homesection2
import './progsection4.css'
import Webapp from '../../img/web-app.webp'

const Progsection4 = ()=>{
    return(<div className='progsec4'>
        <h1>APPLICATIONS WEB</h1>
        <hr/>
        <div className='progsec4-bottom'>
            <div className='progsec4-left'>
                <h2>Qu'est-ce qu'une application web ?</h2>
                <p>Une application web est un logiciel qui fonctionne sur un serveur 
                    web au lieu de fonctionner sur le système d'exploitation de votre ordinateur.
                     Les seules limites de ce qu'une application web peut faire sont votre
                      emploi du temps et votre budget. Quelques exemples courants
                       d'applications web sont les systèmes CRM (gestion de la relation client),
                        les systèmes ERP (planification des ressources de l'entreprise),
                         les plates-formes de rencontres, les plates-formes de réservation,
                          les grands sites web de commerce électronique, etc...</p>
                <h2>Pourquoi devrais-je avoir une application web ?</h2>
                <p>Vous devriez avoir une application web si vous êtes à la recherche
                     d'une plateforme en ligne évolutive et adaptée à vos besoins et si
                      vous êtes prêt à vous engager dans une démarche de développement
                       durable. plateforme en ligne évolutive adaptée à vos besoins et
                        que vous êtes prêt à investir des ressources dans son développement.</p>
            </div>
            <div className='progsec4-right'>
                <img src={Webapp} alt='web app'/>
            </div>
        </div>
    </div>)
}

export default Progsection4
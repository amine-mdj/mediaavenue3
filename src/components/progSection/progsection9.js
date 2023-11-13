import './progsection9.css'
import Caracter from '../../img/character.webp'

const Progsection9 = ()=>{
    return(<div className='progsec9'>
        <div className='progsec9-left'>
            <img src={Caracter}/>
        </div>
        <div className='progsec9-right'>
            <h1>MAINTENANCE <br/> DE SITES WEB</h1>
            <hr/>
            <h2>Qu'appelle-t-on la maintenance d'un site web ?</h2>
            <p>La maintenance de votre site web est cruciale, quelle que soit la taille
                 ou l'activité de votre entreprise. C'est LE moyen de garantir que votre
                  site web continuera à fonctionner sans erreurs, bogues et temps
                   d'arrêt en prévenant les problèmes potentiels, en mettant à jour
                    le système et en mettant en œuvre des solutions de sauvegarde..</p>
            <p>Lorsque vous travaillez avec nous pour la maintenance de votre site web,
                 vous achetez votre tranquillité d'esprit. Nous prenons l'entière
                  responsabilité de la santé de votre site web et vous garantissons
                   un temps de fonctionnement maximum et un minimum de bugs/erreurs.</p>
        </div>
        
    </div>)
}

export default Progsection9
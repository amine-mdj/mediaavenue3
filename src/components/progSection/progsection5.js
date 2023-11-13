import './progsection5.css'
import Ecommerce from '../../img/ecommerce-website.webp'

const Progsection5 = ()=>{
    return(<div className='progsec5'>
        <h1>SITE E-COMMERCE </h1>
        <hr />
        <div className='progsec5-bottom'>
           <div className='progsec5-left'>
             <img src={Ecommerce}/>
           </div>
           <div className='progsec5-right'>
             <h2>Qu'est-ce qu'un site e-commerce?</h2>
             <p>un <span>site e-commerce</span> est un portail en
              ligne destiné à de faciliter les transactions en ligne
               (achat/vente) de biens et de services. Il peut s'avérer
                utile si vous vendez des biens physiques, des biens numériques
                 ou des services.</p>
             <h2>Pourquoi devrais-je avoir un site e-commerce ?</h2>
             <p>Vous devez avoir un site web de e-commerce si vous voulez
                <span>vendre vos produits ou services en ligne</span>
                et que vous n'avez généralement pas besoin d'interagir avec vos clients pour
                 convertir les clients potentiels. Vous devez également avoir
                  une bonne maîtrise de la gestion et de la logistique pour fournir
                   à votre client ce qu'il a acheté, dans les délais que vous vous êtes
                    engagés à respecter</p>
           </div>
        </div>
    </div>)
}

export default Progsection5
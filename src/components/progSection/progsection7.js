import './progsection7.css'
import Blog from '../../img/blog-websites.webp'

const Progsection7 = ()=>{
    return(<div className='progsec7'>
        <h1>SITE BLOG</h1>
        <hr />
        <div className='progsec7-bottom'>
           <div className='progsec7-left'>
             <img src={Blog}/>
           </div>
           <div className='progsec7-right'>
             <h2>Qu'est-ce qu'un blog ?</h2>
             <p>Un <span>blog </span> est un site web appartenant à un particulier ou à une
              entreprise qui vise à informer les visiteurs des dernières nouvelles relatives
               à un sujet ou à un secteur spécifique. Les blogueurs s'efforcent généralement
                de susciter un d'engagement sur leurs posts en créant un contenu unique et
                 de valeur.</p>
             <h2>Pourquoi devrais-je avoir un blog ?</h2>
             <p>Vous devriez avoir un blog si vous êtes un expert dans votre domaine,
               si vous êtes passionné par ce que vous faites, si vous écrivez bien,
                et si vous êtes prêt à faire un peu de référencement sur vos articles.</p>
           </div>
        </div>
    </div>)
}

export default Progsection7
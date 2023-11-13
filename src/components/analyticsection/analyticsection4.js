import './analyticsection4.css'
import Whatis from '../../img/what-is-icon.webp'

const Analyticsection4 = ()=>{
  return(<div className='ticsec4'>
    <div className='ticsec4-left'>
     <img src={Whatis} alt='what is icon image' />
    </div>
    <div className='ticsec4-right'>
     <h1>QU'EST-CE QU'UN OUTIL DE WEB ANALYTICS?</h1>
     <hr/>
     <p>Un outil d'analyse web est une plateforme qui vous aide à collecter,
       mesurer et rendre compte des données relatives aux utilisateurs de votre site web.</p>
     <p>Il vous permettra de savoir qui sont vos visiteurs, comment ils vous ont trouvé
       et comment ils ont interagi avec votre site web. </p>
    </div>
  </div>)
}

export default Analyticsection4
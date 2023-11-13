import './progsection1.css'
import Prog from '../../img/webagency2.webp'

const Progsection1 = ()=>{
    return(<div className='progsec1'>
        <div className='progsec1-left'>
            <img src={Prog}/>
        </div>
        <div className='progsec1-right'>
            <div className='progsec1-right-inner'>
            <h1>VOTRE AGENCE WEB EN ALGERIE</h1>
            <hr/>
            <p>Nous créons des sites web rapides,
                 faciles à modifier et à entretenir, et adaptés aux moteurs de recherche.</p>
                 </div>
        </div>
    </div>)
}

export default Progsection1
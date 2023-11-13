import './designsection1.css'
import Top  from '../../img/Design2.webp'

const Designsection1 = () =>{
    return(<div className='desec1'>
        <div className='desec1-left'>
            <img src={Top} />
        </div>
        <div className='desec1-right'>
            <h1>VOTRE AGENCE DE WEB DESIGN EN ALGÉRIE</h1>
            <hr/>
            <p>Les sites web que nous créons correspondent à l'image de votre marque,
                 sont responsive (RWD) et améliorent l'expérience de l'utilisateur.</p>
        </div>
    </div>)
}

export default Designsection1
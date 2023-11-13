import './designsection11.css'
import Restaurant from '../../img/restaurants2.webp'

const Designsection11 = () =>{

    const handlemove = (e) =>{
        const btn = document.querySelector('.desec11-btn-inner');
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
        console.log(x,y)
      }


    return(<div className='desec11'>
        <div className='desec11-left'>
            <img src={Restaurant} alt='image restaurant'/>
        </div>
        <div className='desec11-right'>
          <h1>DESIGN DE SITE WEB POUR LES RESTAURANTS</h1>
          <hr/>
          <p>Chez Media avenue nous écoutons nos clients et nous utilisons leurs
             commentaires et notre expérience pour trouver de nouvelles solutions.
              C'est ainsi que naît notre <span> design de site web pour restaurant.</span></p>
          <p>Nous aspirons à apporter aux propriétaires et gérants de restaurants un site
             web spécialement conçu pour présenter leur activité aux clients potentiels de
              la meilleure manière.</p>
              <div className='desec11-btn'><button className='desec11-btn-inner' onMouseMove={handlemove}><span>LIRE LA SUITE</span></button></div>
          
        </div>
    </div>)
}

export default Designsection11
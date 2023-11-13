import './homesection3.css'
import Shop from '../img/Ajouter2.webp'

const Homesection3 = () =>{

   

      const handlemove = (e) =>{
        const btn = document.querySelector('.btnspan');
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
        console.log(x,y)
      }

    return (<div className='hmsec3'>
         <div className='hmsec3-left'>
            <h1>L'AGENCE DIGITALE</h1>
            <hr/>
            <p>Notre mission est de créer des produits numériques durables. En étant des experts pragmatiques en produits avec une spécialisation technique étroite, nous sommes en mesure d'éviter les surprises et de fournir constamment des logiciels de la plus haute qualité.</p>
            <p>Depuis 2015, nous avons réussi à mener à bien plus de 70 projets web, mobiles et de bureau dans les secteurs de la finance, de l'éducation, de la santé et d'autres industries, en collaborant avec des marques telles que National Geographic, Beam ou Paradox Interactive.</p>
              <p>Notre approche est simple : établir des partenariats avec nos clients où nous travaillons ensemble pour trouver la solution optimale pour leur entreprise.</p>
                  <button onMouseMove={handlemove} className='btnspan'><span>Agence</span></button>
                         </div>
         <div className='hmsec3-right'><img src={Shop} ></img></div>
         <div></div>
        </div>)
}

export default Homesection3
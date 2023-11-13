import './homesection1.css'
import Table from '../img/digital-strategy-building.webp'

const Homesection1 = () =>{
    return (<div>
      <div class="wrapper">
       <div class="left">
        <img src={Table} alt="this is an image" />
       </div>
       <div class="right">
        <h1>
           <span class="h1-line1">EN QUOI NOTRE AGENCE</span>
           <span class="h1-line3">PEUT-ELLE VOUS ÊTRE UTILE ?</span>
        </h1>
        <hr/>
        <p>
           <span class="p-line1">Parce que nous avons une vue  d'ensemble de l'industrie du web, nous pouvons</span>
           <span class="p-line2">nous pouvons gérer plus qu'un ensemble de services isolés.</span>
<span class="p-line1">Nous connectons ces services pour<strong> construire votre stratégie numérique..</strong> </span>
         </p>
        
       </div>
        
    </div>
        </div>)
}

export default Homesection1
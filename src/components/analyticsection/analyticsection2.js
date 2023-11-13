import './analyticsection2.css'

const Analyticsection2 = ()=>{
  return(<div className='ticsec2'>
    <h1>QU'EST-CE QUE L'OFFRE DE L'AGENCE D'ANALYSE WEB <br/> MEDIA AVENUE?</h1>
    <hr/>
    <h2>Kit de démarrage Google Analytics</h2>
    <div className='ticsec2-grid'>
     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>1</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Mettez en place un code de tracking sur vos pages : </span>Nous intégrons
         dans l'en-tête de votre site le code qui permettra à Google Analytics de collecter
          les données de votre site.</p>
      </div>

     </div>

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>4</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Définir le plan de mesure : </span>Nous définirons ensemble
         les objectifs de votre de votre site. Grâce à cette première phase et
          aux données de Google Analytics, nous pourrons vous fournir un ensemble
           de KPI (Key Performance Indicator) détaillés, qui représente l'efficacité
            avec laquelle vous avez atteint ces objectifs.</p>
      </div>

     </div>

     <div className='ticsec2-item'>
      <div  className='ticsec2-left'>
        <p>2</p>
      </div>

      <div className='ticsec2-right'>
        <div>
        <p><span>Créer des vues :</span>Nous créons 3 vues dans votre compte :</p>
        <ul>
          <li>Vue des données brutes : Il s'agit de la vue sans filtre, où les données brutes sont stockées.</li>
          <li>Vue de test : Il s'agit d'une vue intermédiaire que nous utilisons pour tester
             l'intégrité des données lorsque nous implémentons de nouveaux filtres</li>
          <li>Vue utilisateur : C'est la vue que vous utiliserez pour vérifier
             vos données. Nous pouvons en créer plusieurs pour afficher des
              informations spécifiques à l'utilisateur.</li>
        </ul>
        </div>
      </div>

     </div>

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>5</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Mise en place d'un tracking des conversions : </span>Vous souhaitez
         probablement en savoir plus sur les utilisateurs qui convertissent sur
          votre site web. Le suivi des conversions est la solution. Il n'y a aucune
           restriction quant à ce que l'on peut définir comme une conversion. Toutefois,
            les conversions sont souvent déclenchées lorsque quelqu'un effectue un achat,
             s'inscrit à une lettre d'information ou remplit un formulaire de contact.</p>
      </div>

     </div>

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>3</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Exclure l'IP et les robots de votre bureau de la collecte des données de l'utilisateur : </span>Vous
         ne voulez probablement pas voir le trafic qui vient de votre bureau ou celui
          qui vient des robots web parce que ce trafic n'est pas rentable pour votre entreprise.
           Nous exclurons ces "visiteurs" de la vue de l'utilisateur.</p>
      </div>

     </div>

     <div className='ticsec2-item'>
      <div className='ticsec2-left'>
        <p>6</p>
      </div>

      <div className='ticsec2-right'>
        <p><span>Créer un rapport personnalisé :</span>Nous mettrons en place un rapport
         personnalisé qui vous sera automatiquement envoyé et qui ne vous montrera que les
          informations qui vous intéressent le plus, celles sur lesquelles vous voulez baser
           vos décisions d'affaires. sur lesquelles vous voulez fonder vos décisions
            commerciales.</p>
      </div>

     </div>
    </div>
  </div>)
}

export default Analyticsection2
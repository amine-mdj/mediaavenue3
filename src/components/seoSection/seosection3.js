import './seosection3.css'
import Checkbox from '../../img/checkbox.webp'

const Seosection3 = () =>{
    return(<div className='seosec3'>
      <div className='seosec3-left'>
        <h1>QUELS SERVICES<br/> DE RÉFÉRENCEMENT  PEUT MEDIA AVENUE ME FOURNIR ?</h1>
        <hr/>
        <h2>1ère étape : Audit</h2>
        <div className='seosec3-outer'>
            <p>Nous divisons notre service<span> d'audit SEO</span> en 5 types  types d'audit.
             Si nous couvrons ces 5 audits, vous aurez une vue d'ensemble de vos
              forces et faiblesses en matière de référencement.</p>
            <p>Vous pouvez choisir de tout faire, ou de choisir l'élément du service d'audit
               SEO que vous jugez nécessaire pour votre entreprise.</p>
            <p>Chaque point d'audit est composé de plusieurs points de contrôle.
               Dans le rapport d'audit  que nous vous remettrons à l'issue de l'audit,
                vous verrez que chaque point analysé donne lieu à des suggestions pour
                 améliorer votre référencement.</p>
            <div className='seosec3-inner'>
             <p><span>Prix :</span> A partir de 25 000NT/audit (425$/audit),
              ou 110 000NT/package (1900$/package ) (5 audits)</p>
             <p><span>Livraison :</span> 3 jours de travail / audit</p>
            </div>
        </div>
      </div>
      <div className='seosec3-right'>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit de sélection des mots-clés :</span> Si vous n'avez pas encore
              choisi vos mots-clés, nous aidons votre entreprise à sélectionner
               les bons. Si vous les avez déjà choisis, nous les étudions de manière
                plus approfondie, tant en termes de pertinence que de regroupement et
                 de cartographie.</p>
            </div>
        </div>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit d'accessibilité et d'indexation :</span> Nous nous assurons
              que que les moteurs de recherche et les visiteurs puissent accéder à votre
               site de la manière optimale. Nous vérifions si et comment les pages affichées
                sur votre site web sont indexées dans le moteur de recherche.</p>
            </div>
        </div>

        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit SEO on-page :</span>Nous examinons tous les paramètres du contenu
              de vos pages et de l'architecture de votre site.</p>
            </div>
        </div>

        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit SEO off-page: </span>Nous examinons tous les paramètres du contenu
              de vos pages et de l'architecture de votre site.</p>
            </div>
        </div>
        <div className='seosec3-row'>
            <div className='seosec3-row-left'>
              <img src={Checkbox} alt='checkbox' />
            </div>
            <div className='seosec3-row-right'>
             <p><span>Audit SEO de la concurrence : </span>Nous reprenons certains points
              des 4 audits mentionnés ci-dessus, mais nous nous concentrons sur vos
               concurrents. Nous comparons ensuite leurs résultats aux vôtres et identifions
                les opportunités qui s'offrent à vous pour les surpasser.</p>
            </div>
        </div>
      </div>
    </div>)
}

export default Seosection3
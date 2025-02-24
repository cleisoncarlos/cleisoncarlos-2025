import Marquee from "react-fast-marquee";
import styles from './style.module.scss'

const logosPaths = {
  agenciabenevides: '/logos/agenciabenevides.png',
  alepa: '/logos/alepa.png',
  ananews: '/logos/ananews.png',
  ananindeua: '/logos/ananindeua.png',
  benevides: '/logos/benevides.png',
  drnumeros: '/logos/drnumeros.png',
  fundacaocultural: '/logos/fundacaocultural.png',
  governoamapa: '/logos/governoamapa.png',
  governopara: '/logos/governopara.png',
  leialdirblanc: '/logos/leialdirblanc.png',
  prefeituracastanhal: '/logos/prefeituracastanhal.png',
  prefeiturasaoluiz: '/logos/prefeiturasaoluiz.png',
  sbseg: '/logos/sbseg.png',
  secult: '/logos/secult.png',

}

export default function Projects() {


  return (
    <div className="container py-5" >



      <div className="py-3">
        <h1 className='fw-bold display-3'><span className='text-white h2 fw-bold'>Conheça alguns </span><span className='text-red'> projetos</span></h1>
        <h4 className='text-secondary'>Desde grandes portais a pequenos sites, conheça um pouco mais ...</h4>
      </div>
      <Marquee pauseOnHover={true} gradient gradientColor="#212529" speed={40} >
        {Object.entries(logosPaths).map(([name, src]) => (
          <a href="/" key={name}>
            <img key={name} src={src} alt={name} height={150} width={300} className="img-fluid px-3" />
          </a>
        ))}

      </Marquee>
    </div>
  )
}
import Marquee from "react-fast-marquee";


const logosPaths = {
  governopara: '/logos/governopara.png',
  fundacaocultural: '/logos/fundacaocultural.png',
  secult: '/logos/secult.png',
  leialdirblanc: '/logos/leialdirblanc.png',
  sbseg: '/logos/sbseg.png',
  ananindeua: '/logos/ananindeua.png',
  ananews: '/logos/ananews.png',
  alepa: '/logos/alepa.png',
  governoamapa: '/logos/governoamapa.png',
  prefeiturasaoluiz: '/logos/prefeiturasaoluiz.png',
  benevides: '/logos/benevides.png',
  agenciabenevides: '/logos/agenciabenevides.png',
  prefeituracastanhal: '/logos/prefeituracastanhal.png',
  datakons: '/logos/datakons.png',
  ludusstudio: '/logos/ludusstudio.png',
  parquimica: '/logos/parquimica.png',
  themens: '/logos/themens.png',
  drnumeros: '/logos/drnumeros.png',
}

export default function Projects() {


  return (
    <div className="container py-5" >



      <div className="py-3">
        <h1 className='fw-bold display-3'><span className='text-white h2 fw-bold'>Conheça alguns </span><span className='text-red'> projetos</span></h1>
        <h4 className='text-secondary'>Alguns projetos que participei ou desenvolvi.</h4>
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
import Marquee from "react-fast-marquee";


const logosPaths = {
  governopara: { src: '/logos/governopara.png', alt: 'Governo do Pará' },
  fundacaocultural: { src: '/logos/fundacaocultural.png', alt: 'Fundação Cultural' },
  secult: { src: '/logos/secult.png', alt: 'SECULT' },
  leialdirblanc: { src: '/logos/leialdirblanc.png', alt: 'Lei Aldir Blanc' },
  sbseg: { src: '/logos/sbseg.png', alt: 'SBSEG' },
  ananindeua: { src: '/logos/ananindeua.png', alt: 'Prefeitura de Ananindeua' },
  ananews: { src: '/logos/ananews.png', alt: 'AnaNews' },
  alepa: { src: '/logos/alepa.png', alt: 'ALEPA' },
  governoamapa: { src: '/logos/governoamapa.png', alt: 'Governo do Amapá' },
  prefeiturasaoluiz: { src: '/logos/prefeiturasaoluiz.png', alt: 'Prefeitura de São Luiz' },
  benevides: { src: '/logos/benevides.png', alt: 'Prefeitura de Benevides' },
  agenciabenevides: { src: '/logos/agenciabenevides.png', alt: 'Agência Benevides' },
  prefeituracastanhal: { src: '/logos/prefeituracastanhal.png', alt: 'Prefeitura de Castanhal' },
  datakons: { src: '/logos/datakons.png', alt: 'Datakons' },
  ludusstudio: { src: '/logos/ludusstudio.png', alt: 'Ludus Studio' },
  parquimica: { src: '/logos/parquimica.png', alt: 'Parquímica' },
  themens: { src: '/logos/themens.png', alt: 'Themens' },
  drnumeros: { src: '/logos/drnumeros.png', alt: 'Dr. Números' },
}

export default function Projects() {


  return (
    <div className="container py-5" >



      <div className="py-3">
        <h3 className='fw-bold display-3 h1'><span className='text-white h2 fw-bold'>Conheça alguns </span><span className='text-red'> projetos</span></h3>
        <h4 className='text-secondary'>Alguns projetos que participei ou desenvolvi.</h4>
      </div>
      <Marquee pauseOnHover={true} gradient gradientColor="#212529" speed={40} >
        {Object.entries(logosPaths).map(([name, { src, alt }]) => (
          <a href="/" key={name}>
            <img key={name} title={alt} src={src} alt={alt} height={150} width={300} className="img-fluid px-3" />
          </a>
        ))}
      </Marquee>
    </div>
  )
}
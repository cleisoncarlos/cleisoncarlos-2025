import {WhatsappLogo, EnvelopeSimple} from '@phosphor-icons/react'

export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand text-red" href="/">
    {/* <span>
   
    <span className='fw-bold text-red'>cleisoncarlos</span><span className='small text-white'>.com</span> </span>
     */}
     <img src='/logo.svg' className='img-fluid'/>  
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog ">Blog</a>
        </li>
      </ul>
      <span className="navbar-text">
    
    
    


        <div className="btn-group btn-sm" role="group" aria-label="Basic example">
        <button className="btn btn-outline-ligth btn-sm border-0 px-3" disabled={true}>ENTRE EM CONTATO</button> 
        <a href='mailto:contato@cleisoncarlos.com' className='btn btn-danger btn-sm'>
        <EnvelopeSimple size={32} color='#fff' weight='duotone' />  
        </a> 
        <a href='https://wa.me/91981989210?text=Olá, entro em contato através do seu site' className='btn btn-success btn-sm'>
        <WhatsappLogo size={32} color='#fff' weight='duotone' /> 
        </a> 

</div>
    
    
    
    
    
    
    
    
    
    
      </span>
    </div>
  </div>
</nav>
  )
}

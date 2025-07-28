import { LinkedinLogo, GithubLogo, MediumLogo, DribbbleLogo } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
<>
  <ul className="nav">
  <li className='nav-item'>
    <a className="nav-link px-2 " aria-current="page" href="https://br.linkedin.com/in/cleisoncarlos" target="_blank" rel="noreferrer">
    <LinkedinLogo color="#fff" weight="duotone" size={32} aria-hidden="true"/>
     <span className="visually-hidden">Perfil no Linkedin</span>
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link px-2" href="https://github.com/cleisoncarlos" target="_blank" rel="noreferrer">
    <GithubLogo color="#fff" weight="duotone" size={32} aria-hidden="true" />
    <span className="visually-hidden">Perfil no GitHub</span>
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link px-2" href="https://cleisoncarlos.medium.com" target="_blank" rel="noreferrer">
    <MediumLogo color="#fff" weight="duotone" size={32} aria-hidden="true" />
    <span className="visually-hidden">Perfil no Medium</span>
    </a>
  </li>

  <li className='nav-item'>
    <a className="nav-link px-2" href="https://dribbble.com/cleisoncarlos" target="_blank" rel="noreferrer">
    <DribbbleLogo color="#fff" weight="duotone" size={32} aria-hidden="true" />
    <span className="visually-hidden">Perfil no Dribbble</span>
    </a>
  </li>

</ul>
</>
  )
}

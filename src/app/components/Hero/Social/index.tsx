import { LinkedinLogo, GithubLogo, MediumLogo, DribbbleLogo } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
<>
  <ul className="nav">
  <li className='nav-item'>
    <a className="nav-link active" aria-current="page" href="#">
    <LinkedinLogo color="#bababa" weight="duotone" size={40}/>
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link" href="#">
    <GithubLogo color="#bababa" weight="duotone" size={40} />
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link" href="#">
    <MediumLogo color="#bababa" weight="duotone" size={40} />
    </a>
  </li>

  <li className='nav-item'>
    <a className="nav-link" href="#">
    <DribbbleLogo color="#bababa" weight="duotone" size={40} />
    </a>
  </li>

</ul>
</>
  )
}

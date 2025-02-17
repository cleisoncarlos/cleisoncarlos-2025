import { Horse, Heart, Cube } from "@phosphor-icons/react/dist/ssr";
import styles from './style.module.scss'
export default function Hero() {
  return (


<>
  <ul className="nav">
  <li className={`nav-item ${styles['social-icon']}`}>
    <a className="nav-link active" aria-current="page" href="#">
    <Horse color="#bababa" weight="fill" size={40}/>
    </a>
  </li>
  <li className={`nav-item ${styles['social-icon']}`}>
    <a className="nav-link" href="#">
    <Heart color="#bababa" weight="fill" size={40} />
    </a>
  </li>
  <li className={`nav-item ${styles['social-icon']}`}>
    <a className="nav-link" href="#">
    <Cube color="#bababa" weight="fill" size={40} />
    </a>
  </li>
  <li className={`nav-item ${styles['social-icon']}`}>
    <a className="nav-link ">Disabled</a>
  </li>
</ul>
</>
  )
}

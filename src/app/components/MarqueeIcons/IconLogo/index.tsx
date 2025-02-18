//import style from './style.module.scss'

export default function IconLogo({src, alt}:{src: string, alt: string}) {
  return (

        <img src={src} alt={alt} width={60} className="mx-3 img-fluid" />
 
  )
}

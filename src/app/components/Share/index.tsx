import { FacebookLogo , WhatsappLogo, XLogo, LinkedinLogo , Envelope } from "@phosphor-icons/react/dist/ssr";

export default function Share({url}: {url: string}) {
  return (
<>
  <ul className="nav d-flex justify-content-end align-items-center mb-3">
  <li className='nav-item text-white'>
  Compartilhar:
  </li>
  <li className='nav-item'>
    <a className="nav-link active" aria-current="page" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
    <FacebookLogo color="#395693" weight="regular" size={26}/>
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link" href={`whatsapp://send?text=${url}`}   >
    <WhatsappLogo color="#00a533" weight="regular" size={26} />
    </a>
  </li>
  <li className='nav-item'>
    <a className="nav-link" href={`http://twitter.com/share?url=${url}`}   >	
    <XLogo color="#FFFfff" weight="regular" size={26} />
    </a>
  </li>

  <li className='nav-item'>
    <a className="nav-link" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank">
    <LinkedinLogo color="#0073af" weight="regular" size={26} />
    </a>
  </li>

  <li className='nav-item'>
    <a className="nav-link" href={`mailto:?subject=Veja este artigo&body=Olá, achei este artigo muito interessante e gostaria de compartilhar com você: ${url}`}   >	
    <Envelope color="#a42626" weight="regular" size={26} />
    </a>
  </li>

</ul>
</>
  )
}

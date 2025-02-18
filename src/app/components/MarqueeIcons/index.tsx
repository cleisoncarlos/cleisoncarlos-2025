import Marquee from "react-fast-marquee";

import IconLogo from "./IconLogo";
import   axixos from '../../../../public/icons/nextjs/nextjs-original-wordmark.svg'

const  amazon = '/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
const axios = '/icons/axios/axios-plain-wordmark.svg'
const bootstrap = '/icons/bootstrap/bootstrap-original.svg'
const css = '/icons/css3/css3-original.svg'
const docker = '/icons/docker/docker-original.svg'
const express = '/icons/express/express-original.svg'
const firebase = '/icons/firebase/firebase-original.svg'
const git = '/icons/git/git-original.svg'
const github = '/icons/github/github-original-wordmark.svg'
const graphql = '/icons/graphql/graphql-plain.svg'
const html = '/icons/html5/html5-original.svg'
const javascript = '/icons/javascript/javascript-original.svg'
const json = '/icons/json/json-original.svg'
const linux = '/icons/linux/linux-original.svg'
const mysql = '/icons/mysql/mysql-original-wordmark.svg'
const nextjs = '/icons/nextjs/nextjs-original-wordmark.svg'


export default function MarqueeIcons() {
  return (
<div className="bg-white py-2">
<Marquee gradient={true}>

  <IconLogo src={amazon} alt="teste"/>
<IconLogo src={axios} alt="axios"  />
<IconLogo src={amazon} alt="Amazon"/>
<IconLogo src={bootstrap} alt="Bootstrap"/>
<IconLogo src={css} alt="CSS"/>
<IconLogo src={docker} alt="Docker"/>
<IconLogo src={express} alt="CSS"/>
<IconLogo src={firebase} alt="CSS"/>
<IconLogo src={git} alt="CSS"/>
<IconLogo src={github} alt="CSS"/>
<IconLogo src={graphql} alt="CSS"/>
<IconLogo src={html} alt="CSS"/>
<IconLogo src={javascript} alt="CSS"/>
<IconLogo src={json} alt="CSS"/>
<IconLogo src={linux} alt="CSS"/>
<IconLogo src={mysql} alt="CSS"/>
<IconLogo src={nextjs} alt="CSS"/>
<IconLogo src={css} alt="CSS"/>



  </Marquee>
</div>


   
  )
}

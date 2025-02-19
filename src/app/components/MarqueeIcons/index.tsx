import Marquee from "react-fast-marquee";
import IconLogo from "./IconLogo";

import styles from './style.module.scss'

const iconPaths = {
  html: '/icons/html5/html5-original.svg',
  css: '/icons/css3/css3-original.svg',
  bootstrap: '/icons/bootstrap/bootstrap-original.svg',
  tailwind: '/icons/tailwindcss/tailwindcss-original.svg',
  sass: '/icons/sass/sass-original.svg',
  
  javascript: '/icons/javascript/javascript-original.svg',
  json: '/icons/json/json-original.svg',

  git: '/icons/git/git-original.svg',
  github: '/icons/github/github-original-wordmark.svg',

  react: '/icons/react/react-original.svg',
  nextjs: '/icons/nextjs/nextjs-original-wordmark.svg',
  typescript: '/icons/typescript/typescript-original.svg',

  node: '/icons/nodejs/nodejs-original-wordmark.svg',
  axios: '/icons/axios/axios-plain-wordmark.svg',
  express: '/icons/express/express-original.svg',
  swagger: '/icons/swagger/swagger-original.svg',

  php: '/icons/php/php-original.svg',
  wordpress: '/icons/wordpress/wordpress-plain-wordmark.svg',
  woocomerce: '/icons/woocommerce/woocommerce-original.svg',

  openai: '/icons/openapi/openapi-original-wordmark.svg',

  prisma: '/icons/prisma/prisma-original-wordmark.svg',
  
  supabase: '/icons/supabase/supabase-original.svg',
  firebase: '/icons/firebase/firebase-original.svg',
  mysql: '/icons/mysql/mysql-original-wordmark.svg',
  postgresql: '/icons/postgresql/postgresql-original-wordmark.svg',
  graphql: '/icons/graphql/graphql-plain.svg',
  linux: '/icons/linux/linux-original.svg',

  docker: '/icons/docker/docker-original.svg',
  amazon: '/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',

}

export default function MarqueeIcons() {
  return (
<div className={`py-2 ${styles.glass}`}>
<Marquee>
        {Object.entries(iconPaths).map(([name, src]) => (
          <IconLogo key={name} src={src} alt={name}  />
        ))}

  </Marquee>
</div>


   
  )
}

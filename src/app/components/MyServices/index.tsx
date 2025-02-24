import React from 'react'
import CardService from './CardService'
import { Code, Robot, Handshake, Storefront, AppleLogo, Graph } from '@phosphor-icons/react'

const services = [
  {
    icon: Code,
    title: 'Portais, websites e blogs',
    description: 'A presença online é essencial nos dias de hojem um site ou blog personalizado que se destaque da concorrência. Transmita sua mensagem de forma cativante, compartilhe seus conhecimentos ou promova seus serviços de maneira profissional na internet.'
  },
  {
    icon: Robot,
    title: 'Inteligência Artificial I.A.',
    description: 'Potencialize seu negócio com soluções de Inteligência Artificial personalizadas, automatize processos, melhore a tomada de decisões e crie experiências mais inteligentes para seus usuários, aproveite todo o potencial da AI para se manter à frente da concorrência.'
  },
  {
    icon: AppleLogo,
    title: 'Aplicativos ',
    description: 'Entre na era dos aplicativos móveis e leve seu negócio para o próximo nível, seja um aplicativo corporativo, uma solução de gerenciamento ou uma ideia revolucionária, estou aqui para transformá-la em um aplicativo funcional e atraente.'
  },
  {
    icon: Storefront,
    title: 'E-commerce',
    description: 'Abra as portas do seu negócio para o mundo digital com uma Loja Virtual sob medida. De pagamentos seguros a catálogos de produtos atraentes, sua loja virtual será o ponto de partida para o sucesso do seu empreendimento.'
  },
  {
    icon: Handshake,
    title: 'Landing Pages & Marketing',
    description: 'Criação de landing pages otimizadas, desenvolvimento de páginas focadas na conversão de visitantes em leads ou clientes, integrando SEO, garantindo uma experiência de usuário envolvente e resultados mensuráveis.'
  },
  {
    icon: Graph,
    title: 'Mentoria especializada',
    description: 'Ofereça mentoria especializada para serviços na web, guiando desde o desenvolvimento até a otimização de SEO. Compartilhe práticas recomendadas, resolva desafios técnicos e ajude seus mentorados a alcançar a excelência em suas aplicações. Transforme habilidades básicas em expertise'
  }


]

export default function MyServices() {
  return (
    <section id='bg-code'>
      <div className="container py-5">
        <h1 className='fw-bold display-3'><span className='text-white h2 fw-bold'>Alguns dos meus </span><span className='text-red'> serviços</span></h1>
        <h3 className='text-secondary'>O que posso fazer por você?</h3>
        <p className='text-white'>
          Utilizando ferramentas e plataformas líderes da indústria para desenvolver websites,
          aplicativos e sistemas que não só atendem, mas superam as expectativas.
          <br />
         Oferecendo soluções personalizadas e de alta qualidade, adaptadas às necessidades específicas de cada cliente. Com uma abordagem centrada no cliente e uma paixão por excelência, transformamos suas ideias em realidade com tecnologia de ponta.
        </p>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
          {services.map((service, index) => (
            <CardService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

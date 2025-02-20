import React from 'react'
import CardService from './CardService'
import { Code, TerminalWindow , Robot, Palette, Storefront } from '@phosphor-icons/react'

const services = [
  {
    icon: Code,
    title: 'Websites, Portais e Blogs:',
    description: 'A presença online é essencial nos dias de hoje. Com habilidades em design atraente e programação avançada, vou criar um site ou blog personalizado que se destaque da concorrência. Transmita sua mensagem de forma cativante, compartilhe seus conhecimentos ou promova seus serviços de maneira profissional e intuitiva.'
  },
  {
    icon: TerminalWindow,
    title: 'teste',
    description: 'Potencialize seu negócio com soluções de Inteligência Artificial personalizadas. Integro tecnologias avançadas de AI em seus sistemas existentes para automatizar processos, melhorar a tomada de decisões e criar experiências mais inteligentes para seus usuários. Desde chatbots inteligentes até análise preditiva de dados, posso ajudar sua empresa a aproveitar todo o potencial da AI para se manter à frente da concorrência.'
  },
  {
    icon: Robot,
    title: 'teste',
    description: 'Entre na era dos aplicativos móveis e leve seu negócio para o próximo nível. Com expertise em desenvolvimento de aplicativos para iOS e Android, vou criar uma experiência personalizada que se adapta perfeitamente aos dispositivos móveis. Seja um aplicativo corporativo, uma solução de gerenciamento ou uma ideia revolucionária, estou aqui para transformá-la em um aplicativo funcional e atraente.'
  },
  {
    icon: Palette,
    title: 'teste',
    description: 'Abra as portas do seu negócio para o mundo digital com uma Loja Virtual sob medida. Vou criar uma plataforma de compras online envolvente, segura e de fácil navegação, que vai encantar seus clientes e impulsionar suas vendas. De pagamentos seguros a catálogos de produtos atraentes, sua loja virtual será o ponto de partida para o sucesso do seu empreendimento.'
  },
  {
    icon: Storefront,
    title: 'teste',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
  }
]

export default function MyServices() {
  return (
    <section id='bg-code'>
      <div className="container py-5">
        <h1 className='fw-bold display-3 text-white'>Lorem Ipsum <span className='text-red'>Dolor</span></h1>
        <h3 className='text-secondary'>Lorem Ipsum Dolor</h3>
        <p className='text-white small'>
          Combinamos ferramentas e plataformas líderes da indústria para desenvolver sites, 
          aplicativos e sistemas que não só atendem, mas superam as expectativas. 
          <br />
          Nossa equipe é especializada em um amplo espectro de tecnologias, 
          garantindo que possamos oferecer soluções personalizadas e de alta qualidade, 
          adaptadas às necessidades específicas de cada cliente. Com uma abordagem centrada no cliente e uma paixão por excelência, 
          estamos aqui para transformar suas ideias em realidade com tecnologia de ponta.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
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

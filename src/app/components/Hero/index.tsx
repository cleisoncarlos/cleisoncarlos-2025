import React from 'react'
import Social from './Social'
import style from './style.module.scss'

export default function Hero() {
  return (
    <section className={`container-fluid ${style['bg-hero']}`}>
      <div className="container py-5">
        <div className="row">
          <div className={`col-lg-6 text-white p-3 ${style.glass}`}>
<h5>Olá, eu sou <span className='text-red fw-bold'>Clei</span></h5>
            <h1 className=' display-5'><span className='text-red fw-bold'>Experiências Digitais</span> que Transformam!</h1>
            <p>Sou um desenvolvedor <span className='fw-bold'>web/mobile</span> apaixonado por criar experiências digitais incríveis. Minha paixão pela tecnologia e pelo design me impulsiona a criar soluções criativas e funcionais que ultrapassam as expectativas dos meus clientes</p>
            <p>Se você está em busca de um site impactante, um aplicativo web ou soluções digitais personalizadas, estou aqui para ajudar. Vamos juntos transformar suas ideias em realidade digital! Entre em contato e vamos começar a criar algo incrível juntos.</p>
            <Social />
          </div> 
        </div>
      </div>
    </section>
  )
}

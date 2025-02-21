'use client'
import Link from 'next/link';
import Header from '../components/Header';


import {LinkBreak } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column py-5 text-white bg-black "> 

      <div className='mx-auto text-center'>
      <h1 className="display-1">Error 404</h1>
        <img src='/404.png' className='img-fluid' width={600}/>
        <p className="mt-5 h5">Sente-se guerreiro, <br /> aproxime-se da fogueira e descanse <br /> antes de voltar ao seu destino.</p>
        <Link href="/" className='btn btn-danger'>
       Voltar para a página inicial
        </Link>
      </div>

      </div>
   
    </>
  );
}
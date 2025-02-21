'use client'
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {LinkBreak } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container text-center py-5 text-white">
        <LinkBreak color='#fff' size={200} weight='duotone' />
        <h1 className="display-1">404</h1>
        <p className="lead">Desculpe, a página que você está procurando não foi encontrada.</p>
        <Link href="/">
       Voltar para a página inicial
        </Link>
      </div>
   
    </>
  );
}
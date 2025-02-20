'use client'
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="container text-center py-5">
        <h1 className="display-1">404</h1>
        <p className="lead">Desculpe, a página que você está procurando não foi encontrada.</p>
        <Link href="/">
          <a className="btn btn-primary">Voltar para a página inicial</a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
'use client'
import Link from 'next/link';

export default function NotFound() {
  return (  
      <div className="d-flex flex-column py-5 text-white bg-black">
        <div className='mx-auto text-center'>
          <h1 className="display-1 text-secondary">Error 404</h1>
          <img src='/404.png' className='img-fluid' width={600} />
          <p className="mt-5 text-danger">Sente-se guerreiro, aproxime-se da fogueira e descanse <br /> antes de voltar ao seu destino.</p>
          <Link href="/" className='btn btn-danger'>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
  );
}
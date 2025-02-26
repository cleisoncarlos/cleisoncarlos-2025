import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";


const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
 });



 export const metadata: Metadata = {  
  title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
  description: "Sou um desenvolvedor web especializado em Next.js, React e Node.js. Construo sites rápidos, responsivos e otimizados para SEO. Vamos transformar sua ideia em realidade!",  
  keywords: "Desenvolvedor Web, Criação de Sites, Next.js, React, Frontend, Backend, Programador Freelancer, SEO, Otimização de Sites",  
  authors: [{name: "Seu Nome", url: "https://seusite.com"}], 
  robots: "index, follow",  
  // canonical: "https://seusite.com",  
  openGraph: {  
    title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
    description: "Sou especialista em desenvolvimento web com Next.js e React. Crio soluções personalizadas para empresas e freelancers. Saiba mais!",  
    url: "https://seusite.com",  
    siteName: "Seu Nome - Desenvolvedor Web",  
    type: "website",  
    images: [  
      {  
        url: "https://seusite.com/og-image.jpg",  
        width: 1200,  
        height: 630,  
        alt: "Desenvolvedor Web Freelancer",  
      },  
    ],  
  },  
  twitter: {  
    card: "summary_large_image",  
    site: "@seuTwitter",  
    title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
    description: "Especialista em desenvolvimento web com Next.js e React. Construo sites rápidos e otimizados para SEO.",  
    images: ["https://seusite.com/og-image.jpg"],  
  },  
};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className}`}>
        <Header/>
       <main>
       {children}
       </main>
       <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}

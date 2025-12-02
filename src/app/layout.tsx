import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
// Importando a fonte Poppins do Google Fonts
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
 });



 export const metadata: Metadata = {  
  title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
  description: "Sou um desenvolvedor web apaixonado por criar experiências digitais que combinam desempenho, estética e funcionalidade. Com expertise em front-end e back-end, transformo ideias em interfaces intuitivas e sistemas robustos que impulsionam negócios e encantam usuários.",  
  keywords: "Desenvolvedor Web, Criação de Sites, Next.js, React, Frontend, Backend, Programador Freelancer, SEO, Otimização de Sites",  
  authors: [{name: "Cleison Carlos", url: "https://cleisoncarlos.com.com"}], 
  robots: "index, follow",  
  // canonical: "https://cleisoncarlos.com",  
  openGraph: {  
    title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
    description: "Sou um desenvolvedor web apaixonado por criar experiências digitais que combinam desempenho, estética e funcionalidade. Com expertise em front-end e back-end, transformo ideias em interfaces intuitivas e sistemas robustos que impulsionam negócios e encantam usuários.",  
    url: "https://cleisoncrlos.com",  
    siteName: "Cleison Carlos - Desenvolvedor Web / Mobile",  
    type: "website",  
    images: [  
      {  
        url: "https://cleisoncarlos.com.com/og-image.jpg",  
        width: 1200,  
        height: 630,  
        alt: "Desenvolvedor Web / Mobile - Cleison Carlos",  
      },  
    ],  
  },  
  // twitter: {  
  //   card: "summary_large_image",  
  //   site: "@seuTwitter",  
  //   title: "Desenvolvedor Web | Criação de Sites e Aplicações Modernas",  
  //   description: "Especialista em desenvolvimento web com Next.js e React. Construo sites rápidos e otimizados para SEO.",  
  //   images: ["https://cleisoncarlos.com/og-image.jpg"],  
  // },  
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


import CardNews from "./components/CardNews";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeIcons from "./components/MarqueeIcons";
import MyServices from "./components/MyServices";

export default function Home() {
  return (
    <div className='container'>

  
      <Header/>
      <Hero/>
      <MarqueeIcons/>
      <MyServices/>


      <div className="row">

        <div className="col-lg-4">
          <CardNews tag="teste" title="Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor" urlImage="https://picsum.photos/600/800?random=1"/>
        </div>

        <div className="col-lg-4">
          <CardNews tag="teste" title="Lorem Ipsum Dolor" urlImage="https://picsum.photos/600/800?random=2"/>
        </div>

        <div className="col-lg-4">
          <CardNews tag="teste" title="Lorem Ipsum Dolor" urlImage="https://picsum.photos/600/800?random=3"/>
        </div>

      </div>

    </div>
  );
}

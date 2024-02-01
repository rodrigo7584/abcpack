import Image from "next/image";
import Link from "next/link";

import SwiperProjects from "../components/SwiperProjects"
import SwiperClients from "../components/SwiperClients"
import EnviarEmail from "../components/EnviarEmail"

import HeroImage from "../public/products.png"
import AboutUsImage from "../public/about-us.png"
import IconPack from "../public/icon-pack.png"
import ProductCustomImage from "../public/packs.png"
import BagsImage from "../public/bags.png"

export default function Home() {
  const qualities = [
    { 
      title: "Identidade Visual Exclusiva:", 
      text: `Crie uma conexão única com seus clientes 
      através  de embalagens personalizadas que refletem 
      a identidade visual da sua marca.`
    },
    { 
      title: "Qualidade Inigualável:", 
      text: `Nossas embalagens são confeccionadas
       com materiais premium, garantindo durabilidade 
       e preservaçãoda temperatura dos alimentos.`
    },
    { 
      title: "Design Funcional:", 
      text: `Desenvolvem os embalagens inteligentes, 
      pensadas para  otimizar o transporte e manter a 
      integridade dos pratos, mantendo a qualidade do 
      seu menu.`
    },
    { 
      title: "Marketing em Cada Entrega", 
      text: `Transforme cada entrega em uma oportunidade
      de marketing. Nossas embalagens não apenas 
      protegem, mas também promovem sua marca.`
    },
  ];
  return (
    <main>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h1 className="title">
                As Embalagens 
                Personalizadas ABC Pack
                <span> são a solução ideal para
                destacar o seu negócio
                </span>
              </h1>
              <p className="text-complementary">
                Se você busca <span>elevar a experiência do seu
                delivery e deixar uma marca memorável,</span>
                está no lugar certo. 
              </p>
              <Link href="#" className="btn btn-blue">
                Saiba Mais
              </Link>
            </div>
            <div className="col-right">
              <Image src={HeroImage} quality={100} priority alt=""/>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <div className="box-image">
                <Image src={AboutUsImage} quality={100} alt=""/>
              </div>
            </div>
            <div className="col-right">
              <h2 className="subtitle">
                Conheça a <span>ABC PACK</span>
              </h2>
              <h1 className="title">Quem somos</h1>
              <p>Na ABC PACK, sabemos que sua marca é muito mais do que só 
                embalagens. por isso, estamos aqui para ajudá-lo a criar uma
                presença memorável no mercado. Com nossas soluções de 
                embalagem personalizadas, você pode destacar sua marca e transmitir a mensagem certa para seus clientes. Nós oferecemos a experiÊncia e a expertise necessárias para elevar o valor da sua marca. Conte conosco para obter embalagens de qualidade que irão impressionar seus clinetes e diferencial seu negócio
                do mercado.
              </p>
              <Link href="#" className="btn btn-blue">
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="qualities">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="subtitle">
                Nossas <span>Qualidades</span>
              </h2>
              <h1 className="title">Por que escolher as Embalagens 
                Personalizadas ABC Pack?
              </h1>
              <div className="box-qualities">
                {qualities.map((quality, index) => (
                  <div className="quality" key={index}>
                    <div className="icon">
                      <Image src={IconPack} quality={100} alt=""/>
                    </div>
                    <h2 className="quality-title">{quality.title}</h2>
                    <p>{quality.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-projects" id="our-projects">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="subtitle">
                <span>Portfólio</span>
              </h2>
              <h1 className="title">
                Nossos projetos
              </h1>
              <p className="complement">
                Conheça um pouco das embalagens personalizadas
                produzidar por nós que surpreende nossos clientes.
              </p>
              <SwiperProjects/>
              <Link href="#" className="btn btn-blue">
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="subtitle">
                <span>Depoimentos</span>
              </h2>
              <h1 className="title">
                O que nosso clientes dizem:
              </h1>
              <SwiperClients/>
            </div>
          </div>
        </div>
      </section>
      <section className="custom">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h1 className="title">
                Ao escolher as Embalagens 
                Personalizadas ABC Pack 
                hoje, você receberá:
              </h1>
              <ul className="list-custom">
                <li>
                  <p className="text-complementary">
                    <span>5% de desconto</span>
                    na primeira compra.
                  </p>
                </li>
                <li>
                  <p className="text-complementary">
                   <span>Consultoria gratuita </span> para
                    o design da sua embalagem.
                  </p>
                </li>
              </ul>
              <p>
                Não perca a oportunidade de se destacar da
                concorrência e encantar seus clientes a cada 
                entrega. Faça do seu delivery uma experiência 
                única com as Embalagens Personalizadas ABC Pack.
                <span>Clique no botão abaixo para transformar a forma 
                como seu negócio é percebido!</span>
              </p>
              <Link href="#" className="btn btn-blue">Quero Transformar meu Delivery Agora!</Link>
              <p>*Consulte os termos e condições.</p>
            </div>
            <div className="col-right">
              <div className="box-image">
                <Image src={ProductCustomImage} quality={100} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <Image src={BagsImage} alt=""/>
            </div>
            <div className="col-right">
              <h2 className="subtitle"><span>Contato</span></h2>
              <h1 className="title">Vamos conversar?</h1>
              <p>
                Vamos crescer o seu negócio e impusionar suas
                vendas com soluções que são novas tendências 
                no mercado.
              </p>
              <EnviarEmail/>
            </div>
          </div>
        </div>  
      </section>

    </main>
  );
}

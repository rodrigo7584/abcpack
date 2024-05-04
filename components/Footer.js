'use client'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/logo.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'

import LinkWhatsapp from './LinkWhatsapp'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col-first">
            <Image src={Logo} alt="" className="logo" />
            <p>
              As Embalagens Personalizadas ABC Pack são as soluções ideais para destacar o seu
              negócio.
            </p>
          </div>
          <div className="col col-second">
            <h4 className="footer-title">Mapa do Site</h4>
            <ul className="footer-list">
              <li>
                <Link href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#about-us">Quem somos</Link>
              </li>
              <li>
                <Link href="#our-projects">Projetos</Link>
              </li>
              <li>
                <Link href="#contact">Contato</Link>
              </li>
            </ul>
            <div className="social-buttons">
              <Link href="#">
                <Image src={iconFacebook} alt="" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/abc_pack_oficial?igsh=YjRqZ3ljdm5hMXR3"
              >
                <Image src={iconInstagram} alt="" />
              </Link>
            </div>
          </div>
          <div className="col col-third">
            <h4 className="footer-title">Endereço</h4>
            <ul className="footer-list">
              <li>R. Nossa Sra. da Boa Viagem, 921 </li>
              <li>Ferrazópolis, São Bernardo do Campo </li>
              <li>SP, 09781-000</li>
            </ul>
            <LinkWhatsapp type="link" classes="row-contact" text="(11) 95467-4875" />
          </div>
          <div className="copyright">
            <p>
              Site projetado e desenvolvido pela
              <Link href="http://www.waboo.com.br" target="_blank">
                Waboo Creative
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

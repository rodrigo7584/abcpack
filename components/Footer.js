'use client'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/logo.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'
import iconTelephone from '../public/icon-telephone.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col-first">
            <Image src={Logo} alt="" className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut l magna
              aliqua. Ut enim ad minim veniam,
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
            <h4 className="footer-title">Mapa do Site</h4>
            <ul className="footer-list">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <Link href="#" className="row-contact">
              <Image src={iconTelephone} alt="" />
              (xx) xxxxx-xxxx
            </Link>
            <Link href="#" className="row-contact">
              <Image src={iconTelephone} alt="" />
              (xx) xxxxx-xxxx
            </Link>
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

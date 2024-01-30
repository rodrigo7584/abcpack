'use client'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/logo.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'
import iconTelephone from '../public/icon-telephone.png'


const Footer = () => {
  return <footer>
      <div className="container">
          <div className="row">
            <div className="col">
              <Image src={Logo} alt='' className='logo'/>
              <p>Lorem ipsum dolor sit amet, consectetur 
                sed do eiusmod tempor incididunt ut l
                magna aliqua. Ut enim ad minim veniam, 
              </p>
            </div>
            <div className="col">
              <h4 className="footer-title">Mapa do Site</h4>
              <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Quem somos</Link></li>
                <li><Link href="#">Projetos</Link></li>
                <li><Link href="#">Contato</Link></li>
              </ul>
              <div className="social-buttons">
                <Link href="#">
                  <Image src={iconFacebook} alt=''/>
                </Link>
                <Link href="#">
                  <Image src={iconInstagram} alt=''/>
                </Link>
              </div>
            </div>
            <div className="col">
              <h4 className="footer-title">Mapa do Site</h4>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <Link href="#" className='contact'>
                <Image src={iconFacebook} alt=''/>
                (xx) xxxxx-xxxx
              </Link>
              <Link href="#" className='contact'>
                <Image src={iconFacebook} alt=''/>
                (xx) xxxxx-xxxx
              </Link>
            </div>
            <div className="copyright">
              <p>Site projetado e desenvolvido pela
                <Link href="http://www.waboo.com.br" target='_blank'> Waboo Creative</Link>
              </p>
            </div>
          </div>
      </div>
  </footer>
}

export default Footer

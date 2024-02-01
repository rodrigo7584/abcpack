'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'

import logo from '../public/logo.png'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')

    btnMobile.addEventListener('click', toggleMenu)

    return () => {
      btnMobile.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <header className="menu">
      <div className="container">
        <div className="row">
          <Link href="/" className="logo">
            <Image src={logo} quality={100} priority alt="" className="logo-img" />
          </Link>
          <nav className={isMenuOpen ? 'active' : ''}>
            <button className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul>
              <li className="menu-item">
                <Link href="#hero">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="#about-us">Quem somos</Link>
              </li>
              <li className="menu-item">
                <Link href="#our-projects">Nossos projetos</Link>
              </li>
              <li className="menu-item">
                <Link href="#contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

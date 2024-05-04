import Link from 'next/link'
import Image from 'next/image'

import iconTelephone from '../public/icon-telephone.png'

const LinkWhatsapp = ({ type, text, classes }) => {
  const whatsapp = 'https://api.whatsapp.com/send?phone=5511954674875'

  if (type === 'link') {
    return (
      <Link href={whatsapp} target="_blank" className={classes}>
        <Image src={iconTelephone} alt="" />
        {text}
      </Link>
    )
  } else if (type === 'botao') {
    return (
      <Link target="_blank" href={whatsapp} className={classes}>
        {text}
      </Link>
    )
  }
}

export default LinkWhatsapp

import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2022 Renoel Headphones All rights reserved
      </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
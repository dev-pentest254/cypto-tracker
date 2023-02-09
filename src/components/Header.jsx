import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({back}) {
  return (
    <header className="header">
        <div className='width'>
             {back && (
               <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'  width="24"><path fill='currentColor' d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/></svg>
               </Link>
             )}

               <h1>
                <Link to="/" >Coin Tracker!</Link>
               </h1>
        </div>
    </header>
  )
}

import React from 'react'
import Hero from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        <Hero miniHero={miniHero} />
        {children}
      </main>
      <footer className="text-center mb-5">
        Developed By
        {' '}
        <a
          href="www.linkedin.com/in/jknation"
          target="_blank"
          rel="noopener noreferrer"
        >
         Jude Kuti
        </a>
        , August, 2020
      </footer>
    </>
  )
}

export default BaseLayout

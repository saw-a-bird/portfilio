
import Link from 'next/link'
import Navigation from './_navigation'
import ParticleArea from './_particles'

export const siteTitle = 'Here\'s what you need to know about me.'

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Navigation/> 
      <ParticleArea/>

      {/* Continuation  */}
      <main>{children}</main>

      {/* If it's not layout 'home', show this  */}
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </div>
  )
}

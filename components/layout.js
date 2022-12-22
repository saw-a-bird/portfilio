
// import Link from 'next/link'
import Navigation from './sections/_navigation'
import ParticleArea from './particles'

export default function Skeleton({children, page}) {
  return (
    <div className="container">
      <ParticleArea/>
      <Layout children = {children} />
    </div>
  )
}


 function Layout({ children }) {
  return (
    <>
      <Navigation/> 
      <main>{children}</main>
    </>
  )
}

import Link from 'next/link';
import {useState, useEffect} from 'react';



const navbarMobile = ([isNavCollapsed, setIsNavCollapsed]) =>{
 
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
 return( 
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/"><a className="navbar-brand" href="#">Eat Well, Live Well</a></Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" 
          data-target="#navbarColor01" aria-controls="navbarColor01" 
          aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link" onClick={handleNavCollapse}>Home
                <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" onClick={handleNavCollapse}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/program">
                <a className="nav-link" onClick={handleNavCollapse}>Program</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
              <a className="nav-link" onClick={handleNavCollapse}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        @media(max-width:1024px) {
          .navbar-brand{
            font-size: 1.25rem;
          }
        }

      `}</style>
    </>
 )};

const navbarLaptop = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbar-laptop">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link" >Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" >About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a className="navbar-brand">Eat Well, Live Well</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/program">
            <a className="nav-link" >Program</a>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link href="/contact">
          <a className="nav-link" >Contact</a>
          </Link>
        </li>
      </ul>
  </nav>
)
const Navbar = () =>{
  const [width, setWidth] = useState({width : undefined});
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
const size = useWindowSize([width, setWidth]);
    if(size.width > 1000)
      return navbarLaptop();
    else
      return navbarMobile([isNavCollapsed, setIsNavCollapsed]);

};

const useWindowSize = ([width, setWidth]) =>{
  
  useEffect(() => {
    if(typeof window !== 'undefined'){
      function handleSize(){
        setWidth({width : window.innerWidth});
      }
      window.addEventListener("resize",handleSize);
      handleSize();
      return () => {            
        window.removeEventListener('resize', handleSize);  
      }  
    }
  },[]);

  return width;
}

export default Navbar;
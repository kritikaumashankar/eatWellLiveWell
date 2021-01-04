import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eat Well, Live Well | Sushma Subramaniam </title>
        <link rel = "stylesheet" href= "https://bootswatch.com/4/minty/bootstrap.min.css" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      { children }
      <Footer />
    </>
);


export default Layout;
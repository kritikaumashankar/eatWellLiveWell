import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eat Well, Live Well | Sushma Subramaniam </title>
        <link rel = "stylesheet" href= "https://bootswatch.com/4/minty/bootstrap.min.css" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      { children }
      <Footer />
    </>
);


export default Layout;
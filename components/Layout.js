import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eat Well, Live Well | Sushma Ramaswamy </title>
        <link rel = "stylesheet" href= "https://bootswatch.com/4/minty/bootstrap.min.css" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      { children }
      <Footer />
    </>
);


export default Layout;
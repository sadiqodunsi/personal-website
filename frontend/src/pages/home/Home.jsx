import Navbar from "../../layout/navbar/Navbar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Hello from "../../components/hello/Hello";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Sadiq Odunsi | Full Stack Developer & WordPress Enthusiast</title>
          <meta name="description" content="A full stack web developer with an extensive knowledge of building React and WordPress websites." />
          <link rel="canonical" href="/" />
        </Helmet>
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Hello/>
    </div>
  )
}

export default Home

import { useEffect } from 'react';
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import FruitList from './pages/fruit-list';
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('user');

  useEffect(() => {
    if (isAuthenticated === null) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);


  return (
    <>
      <Header></Header>
      <FruitList></FruitList>
      <Footer></Footer>
    </>
  )
}

export default Home

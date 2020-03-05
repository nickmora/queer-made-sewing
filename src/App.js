import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import NavBar from "./_components/NavBar"
import Footer from './_components/Footer';
import Banner from './_components/Banner';
function App() {
  return (
    <div className="App">
      <Container>
        <Banner />
        <NavBar />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

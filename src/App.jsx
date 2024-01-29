import Layout from "./components/Layout/Layout";
import Routes from './routes/Routes';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Layout>
          <Navbar/> 
          <Routes/>
          <Footer/>
        </Layout>
        </BrowserRouter>
    </>
  )
}

export default App

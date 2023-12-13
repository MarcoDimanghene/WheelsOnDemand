import Layout from "./components/Layout/Layout";

import Routes from './routes/Routes';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Layout>
          <Navbar/>          
          <Routes/>
        </Layout>
        </BrowserRouter>
    </>
  )
}

export default App

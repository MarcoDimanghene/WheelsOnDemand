import Layout from "./components/Layout/Layout";
import { BrowserRouter} from "react-router-dom";
import Routes from './routes/Routes';
import Navbar from "./components/Navbar/Navbar";

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

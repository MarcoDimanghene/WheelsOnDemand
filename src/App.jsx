import { GlobalStyles } from "./Styles/GlobalStyles";
import { Navbar } from "./components/Header/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Layout>
          <Hero/>
      </Layout>
    </>
  )
}

export default App

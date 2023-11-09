import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Navbar/>
        <Hero/>
      </Layout>
    </>
  )
}

export default App

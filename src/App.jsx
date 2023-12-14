import NavBar from "./components/NavBar"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div style={{ "fontFamily": "Poppins" }}>
        <NavBar></NavBar>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

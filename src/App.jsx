import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import useWindowSize from "./customHook/useWindowSize";

function App() {
  const { height } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <>
      {height < 1000 ? (
        <>
          {" "}
          <div className="absolute z-50 ">
            <SideBar open={open} setOpen={setOpen} />
          </div>
        </>
      ) : null}

      <NavBar open={open} setOpen={setOpen} />
      <Home />
      {/* <div className="absolute w-full z-40 " style={{ marginTop: "76%" }}>
        <Footer />
      </div> */}
    </>
  );
}

export default App;

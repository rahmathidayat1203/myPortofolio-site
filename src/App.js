import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import MainLayout from "./components/Layouts/Main.Layouts";
import NavbarLayout from "./components/Navs/Nav.Navs";
import Banner from "./components/Layouts/Banner.Layouts";

function App() {
  useEffect(() => {
    document.title = "Rahmat Hidayat";
    document.body.classList.add("body-element");
  }, []);
  return (
    <Fragment>
      <MainLayout>
        <NavbarLayout />
        <Banner />
      </MainLayout>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import NavBar from "./NavBar";

function Layout(props) {
  return (
    <Fragment>
      <div className=" w-screen">
        <NavBar />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;

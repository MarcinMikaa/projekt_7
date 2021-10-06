import Navbar from "./Navbar";
import Content from "./Content";
// import Test from './Test';
// import TestInput from './TestInput';
// import TestUsername from "./TestUsername";
import "./Main.css";
import Users from "./Users";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Content />
      {/* <Test/> */}
      {/* <TestInput/> */}
      {/* <TestUsername /> */}
      <Users />
    </div>
  );
}

export default Main;

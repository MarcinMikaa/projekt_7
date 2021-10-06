import Navbar from './Navbar';
import Content from './Content';
// import Test from './Test';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <Navbar/>
            <Content/>
            {/* <Test/> */}
        </div>
    );
  }

  export default Main;
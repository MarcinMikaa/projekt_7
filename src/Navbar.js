import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <a href="#">products</a>
            <a href="#">story</a>
            <a href="#">manufacturing</a>
            <a href="#">packaging</a>
            <img src="./basket.png" alt="Basket"></img>
            <img src="./person.png" alt="Person"></img>  
        </div>
    );
  }

  export default Navbar;
import './Icons.css';

function Icons({path, text}) {
    return (
        <div className="links">
            <img src={path}></img>
            <a href="#">{text}</a>
        </div>
    );
  }

  export default Icons;
import './Icons.css';

function Icons({path, text}) {
    return (
        <div className="links">
            <img src={path}></img>
            <h2>{text}</h2>
        </div>
    );
  }

  export default Icons;
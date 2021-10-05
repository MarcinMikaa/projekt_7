import './ImagePosition.css';

function ImagePosition({path}) {
    return (
        <div className="image-position">
            <img src={path}></img>
        </div>
    );
  }

  export default ImagePosition;
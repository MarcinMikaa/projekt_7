import './ImagePositionSecond.css';

function ImagePositionSecond({path}) {
    return (
        <div className="image-position-second">
            <img src={path}></img>
            <div className="heart-button">
                <img src='./vector2.png'></img>
            </div>
        </div>
    );
  }

  export default ImagePositionSecond;
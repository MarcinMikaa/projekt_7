import "./ImagePosition.css";

function ImagePosition({ path, heart }) {
  return (
    <div className="image-position">
      <img src={path}></img>
      {heart && (
        <div className="heart-button">
          <img src="./vector2.png"></img>
        </div>
      )}
    </div>
  );
}

export default ImagePosition;

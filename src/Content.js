import ImagePosition from './ImagePosition';
import './Content.css';

function Content() {
    return (
        <div className="content">
            <div className="images">
                <div className="columns">
                    <ImagePosition path="./image1.png"/>
                    <ImagePosition path="./image2.png"/>
                </div>
                <div className="rows">
                    <ImagePosition path="./image5.png"/>
                    <ImagePosition path="./image6.png"/>
                </div>
            </div>
            <div className="images">
                <div className="rows">
                    <ImagePosition path="./image3.png"/>
                    <ImagePosition path="./image4.png"/>
                </div>
                <div className="columns">
                    <ImagePosition path="./image7.png"/>
                    <ImagePosition path="./image8.png"/>
                </div>
            </div>
        </div>
    );
  }

  export default Content;
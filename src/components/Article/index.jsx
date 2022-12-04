import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "./index.scss";

function Article({ imgSrc, title, description }) {
  return (
    <div className="article-container">
      <div className="article-body">
        <div className="image-container">
          <Image src={imgSrc} fluid rounded className="image" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
      <div className="article-footer">
        <Button>Saznaj Vise</Button>
      </div>
    </div>
  );
}

export default Article;

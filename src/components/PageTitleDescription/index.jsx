import "./index.scss";

export default ({
  title,
  description,
  titleColor,
  descriptionColor,
  bgColor,
}) => (
  <div
    id="page-title-description-container"
    style={{ backgroundColor: bgColor }}
  >
    <h1 style={{ color: titleColor }}>{title}</h1>
    {description && <p style={{ color: descriptionColor }}>{description}</p>}
  </div>
);

import React from "react";
import "./collection-preview.styles.scss";

const collectionPreview = ({ title, items }) => (
  <div class="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({ name }) => (
          <p>{name}</p>
        ))}
    </div>
  </div>
);

export default collectionPreview;

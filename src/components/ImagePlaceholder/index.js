import React from 'react';

import './style.css';

export default function ImagePlaceholder({ image, name }) {
  return (
    <div className="product-image">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <div className="product-image--not-found">Imagem não disponível :(</div>
      )}
    </div>
  );
}

import React from 'react';

import './style.css';

export default function ImagePlaceholder({ image, name }) {
  return (
    <div className="image">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <div className="image--not-found">
          <p>Imagem não disponível :(</p>
        </div>
      )}
    </div>
  );
}

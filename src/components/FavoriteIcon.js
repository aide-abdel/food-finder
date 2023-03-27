import React, { useState } from "react";

function FavoriteIcon() {
  const [favorite, setFavorite] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Font_Awesome_5_regular_star.svg/1152px-Font_Awesome_5_regular_star.svg.png"
  );
  function addFavorite() {
    setFavorite(!favorite);
    if (!favorite) {
      setImgSrc(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Font_Awesome_5_solid_star.svg/1152px-Font_Awesome_5_solid_star.svg.png"
      );
    } else {
      setImgSrc(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Font_Awesome_5_regular_star.svg/1152px-Font_Awesome_5_regular_star.svg.png"
      );
    }
  }
  return (
    <div>
      <img
        alt="favorite"
        className="recipe-card-favorite-icon"
        src={imgSrc}
        onClick={() => addFavorite()}
      />
    </div>
  );
}

export default FavoriteIcon;

import { useState } from "react";
import styles from "../css/main.module.css";

export default function ImageList() {
  const [selectedImage, setSelectedImage] = useState(1);

  const updateMainImage = (id) => {
    setSelectedImage(id);
  };

  const showNextImage = () => {
    if (selectedImage === 4) {
      setSelectedImage(1);
    } else {
      setSelectedImage((old) => ++old);
    }
  };
  const showPreviousImage = () => {
    if (selectedImage === 1) {
      setSelectedImage(4);
    } else {
      setSelectedImage((old) => --old);
    }
  };
  return (
    <div className={styles.images}>
      <div className={styles.bigImage}>
        <img alt="" src={`./images/image-product-${selectedImage}.jpg`} />
      </div>
      <div className={styles.smallImages}>
        <img
          alt=""
          src="./images/image-product-1-thumbnail.jpg"
          onMouseMove={() => updateMainImage(1)}
        />
        <img
          alt=""
          src="./images/image-product-2-thumbnail.jpg"
          onMouseMove={() => updateMainImage(2)}
        />
        <img
          alt=""
          src="./images/image-product-3-thumbnail.jpg"
          onMouseMove={() => updateMainImage(3)}
        />
        <img
          alt=""
          src="./images/image-product-4-thumbnail.jpg"
          onMouseMove={() => updateMainImage(4)}
        />
      </div>
      <div className={styles.IconContainerNextImage} onClick={showNextImage}>
        <img alt="" src="./images/icon-next.svg" className={styles.nextImage} />
      </div>
      <div
        className={styles.IconContainerPreviousImage}
        onClick={showPreviousImage}
      >
        <img
          alt=""
          src="./images/icon-previous.svg"
          className={styles.previousImage}
        />
      </div>
    </div>
  );
}

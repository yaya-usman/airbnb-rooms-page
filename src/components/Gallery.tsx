import styles from "../styles/Gallery.module.css";
import { Carousel } from "@trendyol-js/react-carousel";

import AwesomeSlider from "react-awesome-slider";

const Gallery = () => {
  const images = [
    {
      url: "https://a0.muscache.com/im/pictures/a4c62997-9c90-44ff-9fd6-76b289345456.jpg?im_w=960",
    },
    {
      url: "https://a0.muscache.com/im/pictures/90550d13-1577-46c4-be38-2ba4c4eca47c.jpg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/32d5e7e6-f091-4851-8302-f3b8f5342a0f.jpg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/c1271873-9c68-4257-be96-80f136830aa9.jpg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/644cae9d-0270-47c1-ad48-dcb7462f9836.jpg?im_w=720",
    },
  ];

  return (
    <div className={styles.gallery}>
      {images.map((item, idx) => {
        return (
          <div key={idx}>
            <img src={item.url} alt="img" />
            {idx + 1 === 5 && (
              <button className={styles.allBtn}>
                <i className="fas fa-braille"></i>Show all photos
              </button>
            )}
          </div>
        );
      })}

      <div className={styles.carousel}>
        <Carousel show={3.5} slide={3} swiping={true}>
          {images.map((item,idx) => {
            return <img key={idx} src={item.url} className={styles.carousel} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;

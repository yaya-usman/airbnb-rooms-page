import styles from "../styles/Gallery.module.css";
// import Carousel from 'framer-motion-carousel'
// import { Carousel } from "3d-react-carousal";

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
  let slides = [
    <img
      src="https://a0.muscache.com/im/pictures/a4c62997-9c90-44ff-9fd6-76b289345456.jpg?im_w=960"
      alt="1"
    />,
    <img
      src="https://a0.muscache.com/im/pictures/90550d13-1577-46c4-be38-2ba4c4eca47c.jpg?im_w=720"
      alt="2"
    />,
    <img
      src="https://a0.muscache.com/im/pictures/32d5e7e6-f091-4851-8302-f3b8f5342a0f.jpg?im_w=720"
      alt="3"
    />,
    <img
      src="https://a0.muscache.com/im/pictures/c1271873-9c68-4257-be96-80f136830aa9.jpg?im_w=720"
      alt="4"
    />,
    <img
      src="https://a0.muscache.com/im/pictures/644cae9d-0270-47c1-ad48-dcb7462f9836.jpg?im_w=720"
      alt="5"
    />,
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
      {/* <Carousel  >
        {images.map((item) => {
          <img src={item.url} className={styles.carousel} />;
        })}
      </Carousel> */}
      {/* <Carousel slides={slides} autoplay={true} interval={1000} /> */}

      {/* <AwesomeSlider className={styles.carousel}>
        <div
          data-src="https://a0.muscache.com/im/pictures/a4c62997-9c90-44ff-9fd6-76b289345456.jpg?im_w=960"
        />
        <div data-src="https://a0.muscache.com/im/pictures/90550d13-1577-46c4-be38-2ba4c4eca47c.jpg?im_w=720" />
        <div data-src="https://a0.muscache.com/im/pictures/32d5e7e6-f091-4851-8302-f3b8f5342a0f.jpg?im_w=720" />
        <div data-src="https://a0.muscache.com/im/pictures/c1271873-9c68-4257-be96-80f136830aa9.jpg?im_w=720" />
        <div data-src="https://a0.muscache.com/im/pictures/644cae9d-0270-47c1-ad48-dcb7462f9836.jpg?im_w=720" />
      </AwesomeSlider> */}
    </div>
  );
};

export default Gallery;

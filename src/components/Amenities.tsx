import React from "react";
import { CheckInModal, FeaturesItem } from "../components";
import styles from "../styles/Amenities.module.css";
import { TranslateOutlinedIcon, TextBtn, BedOutlinedIcon } from "../components";

const Amenities = () => {
  return (
    <section className={styles.amenities}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.headingsContainer}>
            <div className={styles.headings}>
              <h3>Entire bungalow hosted by Oğuzhan</h3>
              <ul>
                <li>2 guests</li>
                <li>1 bedroom</li>
                <li>1 bed</li>
                <li>1.5 baths</li>
              </ul>
            </div>
            <div className={styles.thumbnail}>
              <img
                src="https://a0.muscache.com/im/pictures/a4c62997-9c90-44ff-9fd6-76b289345456.jpg?im_w=960"
                alt="thumbnail"
              />
            </div>
          </div>
          <ul className={styles.features}>
            <FeaturesItem />
          </ul>

          {/* translateContainer */}
          <div className={styles.translateContainer}>
            <div className={styles.translate}>
              <span>Translate to English</span>
              <span>
                <TranslateOutlinedIcon />
              </span>
            </div>

            <div className={styles.desc}>
              <p>
                Muhteşem Sapanca Göl’ü manzarasıyla siz değerli misafirlerimize
                doğa içinde müstakil yaşam alanları oluşturduk. Doğanın tüm
                güzelliklerini yaşayabileceğiniz ,tamamen izole evlerimiz ile
                dağ evi özgürlüğünü sizlere sunarken aynı zamanda şehir
                merkezine olan yakınlığı ile siz değerli misafirlerimizi
                ağırlamktan mutluluk duyarız🤗🤗🤗
              </p>
              <div className={styles.more}>
                <span>The space</span>
                <span>
                  Yerimizi müstakildir. 1000 m2 alan sizlere açık ve istediğiniz
                  bir şekilde kullanım sunmaktayız. Dalından meyvelerimiz
                  sebzelerimiz 🌶 sizler içindir 🤗🤗🌲
                </span>
              </div>
              <TextBtn />
              <div className={styles.offer}>
                <h3>Where you'll sleep</h3>
                <div className={styles.offerCard}>
                  <span className={styles.bedIcon}>
                    <BedOutlinedIcon />
                  </span>
                  <div className={styles.bedDesc}>
                    <span>Bedroom</span>
                    <span>1 double bed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>CheckInModal</div>
      </div>
    </section>
  );
};

export default Amenities;

// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
// import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
// import NetworkWifiOutlinedIcon from '@mui/icons-material/NetworkWifiOutlined';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
// import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
// import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
// import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
// import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
// import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
// import FlagIcon from '@mui/icons-material/Flag';

import React from "react";
import { CheckInModal, FeaturesItem } from "../components";
import styles from "../styles/Amenities.module.css";
import { TextBtn, Button } from "../components";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import { offerItem } from "../utils/offerItem";

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
              <TextBtn text="Show more"/>
              {/* bed offer */}
              <div className={styles.bedOffer}>
                <h3>Where you'll sleep</h3>
                <div className={styles.bedOfferCard}>
                  <span className={styles.bedIcon}>
                    <BedOutlinedIcon />
                  </span>
                  <div className={styles.bedDesc}>
                    <span>Bedroom</span>
                    <span>1 double bed</span>
                  </div>
                </div>
              </div>
              {/* offers */}
              <div className={styles.offers}>
                <h3>What this place offers</h3>
                <ul className={styles.offerList}>
                  {offerItem.map((item, idx) => {
                    return (
                      <li key={idx}>
                        {item.icon}
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
                <Button text="Show all amenities" />
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

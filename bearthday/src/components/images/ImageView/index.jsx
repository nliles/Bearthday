import React from "react";
import PropTypes from "prop-types";
import ImageSlider from "../ImageSlider";
import { formatDate, pluralize } from "../../../utils/dateUtils";
import styles from "./index.module.css";

function getImageText(images, date, isActualBday) {
  const imageTxt = pluralize(images.length, "Image");
  if (isActualBday)
    return `${imageTxt} from your last birthday on ${formatDate(date, "LL")}.`;
  return `Sorry, there are no images from your last birthday. ${imageTxt} ${pluralize(
    images.length,
    "is",
    "are"
  )} from ${formatDate(date, "LL")}.`;
}

const ImageView = ({ date, isActualBday, images }) => {
  const formattedDate = date?.split("-").join("/");

  return (
    <div className={styles.container}>
      {!images.length && <p>Sorry, no images available.</p>}
      {images.length > 0 && (
        <div>
          <p className={styles.sliderText}>
            {getImageText(images, date, isActualBday)}
          </p>
          <ImageSlider images={images} date={formattedDate} />
        </div>
      )}
    </div>
  );
};

ImageView.propTypes = {
  date: PropTypes.string,
  isActualBday: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageView;

import React from "react";
import PropTypes from 'prop-types';
import styles from '../ImageSlider/index.module.css';

const Slider = ({ date, img }) => {
    const src = `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/${img}.png`
    return (
        <div>
          <img className={styles.img} src={src} alt={img}/>
        </div>
    )
}


Slider.propTypes = {
  date: PropTypes.string,
  img: PropTypes.string,
}

export default Slider;

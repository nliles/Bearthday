import React from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Slide from '../Slide';
import styles from './index.module.css';

const ImageSlider = ({ images, date }) => {

  const len = images.length;

  const settings = {
    dots: true,
    slidesToShow: len >=3 ? 3 : len,
    slidesToScroll: 1,
    centerMode: len > 3,
  }

  return (
     <Slider {...settings} className={styles.imageContainer}>
      {images.map(img => {
        return (
          <Slide img={img} date={date} key={img}/>
        )
      })}
    </Slider>
  )
}


ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
}

export default ImageSlider;

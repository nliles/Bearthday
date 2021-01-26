import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import ImageSlider from '../ImageSlider';
import { usePrevious } from './hooks';
import { fetchDates, fetchImages } from '../../../helpers/fetchHelpers';
import { getRecentDate, findDate, formatDate, pluralize } from '../../../utils/dateUtils';
import styles from './index.module.css';

const ImageView = ({ match }) => {

  const [images, setImages] = useState([]);
  const [dateUsed, setDateUsed] = useState(null);
  const [isActualBday, setIsActualBday] = useState(null);

  const paramsDate = match?.params?.date;
  const prevParamDate = usePrevious(paramsDate);

  const checkDate = useCallback(async(date) => {
    const mostRecentBday = getRecentDate(date); // get the most recent ocurrence of a date
    const dates = await fetchDates(); // fetch available dates
    const dateUsed = findDate(dates, mostRecentBday);
    const isActualBday = mostRecentBday === dateUsed;
    setDateUsed(dateUsed);
    setIsActualBday(isActualBday);
    return dateUsed;
  });

  useEffect(async() => {
    if (paramsDate !== prevParamDate) {
      const dateUsed = await checkDate(paramsDate);
      getImages(dateUsed);
    }
  }, [paramsDate, prevParamDate])

  const getImages = async (date) => {
    const images = await fetchImages(date);
    setImages(images);
  };

  const getImageText = () => {
    const imageTxt = pluralize(images.length, 'Image');
    if (isActualBday) return `${imageTxt} from your last birthday on ${formatDate(dateUsed, 'LL')}.`
    return `Sorry, there are no images from your last birthday. ${imageTxt} ${pluralize(images.length, 'is', 'are')} from ${formatDate(dateUsed, 'LL')}.`
  }

  const formattedDate = dateUsed?.split('-').join('/');

  return (
    <div className={styles.container}>
     {!images.length &&
       <p>Sorry, no images available.</p>
     }
     {images.length > 0 && (
       <div>
        <p className={styles.sliderText}>{getImageText()}</p>
        <ImageSlider images={images} date={formattedDate}/>
      </div>
     )}
    </div>
  );
}


ImageView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    })
  }),
}

export default ImageView;

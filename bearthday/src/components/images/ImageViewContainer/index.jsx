import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ImageView from "../ImageView";
import { usePrevious } from "./hooks";
import { fetchDates, fetchImages } from "../../../helpers/fetchHelpers";
import { getRecentDate, findDate } from "../../../utils/dateUtils";

const ImageViewContainer = ({ match }) => {
  const [images, setImages] = useState([]);
  const [dateUsed, setDateUsed] = useState(null);
  const [isActualBday, setIsActualBday] = useState(null);

  const paramsDate = match?.params?.date;
  const prevParamDate = usePrevious(paramsDate);

  const getImages = useCallback(async (date) => {
    const imageDate = await checkDate(date);
    const images = await fetchImages(imageDate);
    setImages(images);
  }, []);

  useEffect(() => {
    if (paramsDate !== prevParamDate) {
      getImages(paramsDate);
    }
  }, [paramsDate, prevParamDate, getImages]);

  const checkDate = async (date) => {
    const mostRecentBday = getRecentDate(date); // get the most recent ocurrence of a date
    const dates = await fetchDates(); // fetch available dates
    const dateUsed = findDate(dates, mostRecentBday);
    const isActualBday = mostRecentBday === dateUsed;
    setDateUsed(dateUsed);
    setIsActualBday(isActualBday);
    return dateUsed;
  };

  return (
    <ImageView date={dateUsed} isActualBday={isActualBday} images={images} />
  );
};

ImageViewContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    }),
  }),
};

export default ImageViewContainer;

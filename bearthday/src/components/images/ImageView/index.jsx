import React from "react";
import PropTypes from 'prop-types';
import styles from './index.module.css';

const ImageView = ({ match }) => {

  return (
    <div className={styles.container}>
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

import React from "react";
import { withRouter } from 'react-router-dom';
import Form from "../Form";
import styles from './index.module.css';

const HomePage = (props) => {

  const handleSubmit = (date) => {
    return props.history.push(`/images/${date}`);
  }

  return (
    <div className={styles.body}>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}


export default withRouter(HomePage);

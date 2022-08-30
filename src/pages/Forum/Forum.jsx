import React from "react";
import styles from './Forum.module.scss'
import { useSelector, useDispatch } from "react-redux";

function Forum() {
  const data = useSelector((state) => state);
  console.log(data)
  return (
    <div className={styles.container}>
      <div>Work in Progress!</div>
      <div>Coming Soon :) </div>
    </div>
  );
}

export default Forum;

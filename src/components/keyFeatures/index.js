import React from 'react';
import styles from './styles.module.css';


function KeyFeatures({ features }) {
  return (
    <>
      <p className="text-bold">Key Features</p>
      <ul className={styles.list}>
        {features.map(feature => (
          <li key={feature}>
            <small>{feature}</small>
          </li>
        ))}
      </ul>
    </>
  )
}
export default KeyFeatures
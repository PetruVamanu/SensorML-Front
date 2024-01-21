import cx from 'classnames';
import React from 'react';

import { algorithmsOptions, variablesOptions } from '@/constants/options';

import { InputField, SelectField } from '../Form';
import styles from './InputList.module.css';

export const InputList: React.FC = () => {
  return (
    <div className={styles.row}>
      <SelectField
        options={algorithmsOptions}
        name="algorithm"
        label="Algorithm"
        className={styles.field}
      />

      <SelectField
        options={variablesOptions}
        name="variable"
        label="Variable"
        className={cx(styles.field, 'ml-4')}
      />

      <InputField
        name="training-hours"
        label="Training Hours"
        placeholder="Training Hours"
        type="number"
        className={cx(styles.field, 'mx-4')}
      />

      <InputField
        name="prediction-hours"
        label="Prediction Hours"
        placeholder="Prediction Hours"
        type="number"
        className={styles.field}
      />
    </div>
  );
};

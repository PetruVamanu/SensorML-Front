import { Form } from 'formik';
import React from 'react';

import { Button } from '@/components/Button';

import { InputList } from '../InputList/Inputlist';
import styles from './DetailsBar.module.css';

export const DetailsBar: React.FC = () => {
  return (
    <div className={styles.detailsbar}>
      <div className="text-4xl font-bold">SensorML</div>
      <div className="py-4 text-2xl font-bold">
        {' '}
        Enter the details for prediction:
      </div>
      <Form className={styles.form}>
        <InputList />
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

import { Formik } from 'formik';
import React, { useState } from 'react';

import CsvTable from '@/components/CSVTable';
import { DetailsBar } from '@/components/DetailsBar';
import {
  INITIAL_PREDICTION,
  validationSchema,
} from '@/components/DetailsBar/formConfig';
import { Graphic } from '@/components/Graphic';
import { Plots } from '@/components/Plots';
import type { PredictionParamsType, PredictionType } from '@/types/predition';

const Index = () => {
  const [prediction, setPrediction] = useState<PredictionType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: PredictionParamsType) => {
    const th = Number(values['training-hours']);
    const ph = Number(values['prediction-hours']);

    const { algorithm, variable } = values;

    if (th + ph > 15000) {
      // eslint-disable-next-line no-alert
      alert(
        'The sum of training hours and prediction hours must be less than 15000',
      );
      return;
    }
    console.log(values);

    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/${algorithm}/${variable}/${th}/${ph}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = await response.json();

      // const data = {
      //   diseases: '[AVC, BBC, SEW]',
      //   link: 'https://i.imgur.com/nlxoxPr.png',
      //   ok: true,
      //   testing_error: 0.1,
      // };

      setPrediction(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  console.log({ prediction });

  return (
    <div>
      <Formik<PredictionParamsType>
        initialValues={INITIAL_PREDICTION}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <DetailsBar />
      </Formik>
      <Graphic prediction={prediction} loading={loading} />

      <div className="card">
        <div className="card_row">
          <CsvTable csvFile="./boli_simptome.csv" />
        </div>
        <div className="card_row">
          <CsvTable csvFile="./air.csv" />
          <CsvTable csvFile="./humidity.csv" />
        </div>
      </div>
      <Plots />
    </div>
  );
};

export default Index;

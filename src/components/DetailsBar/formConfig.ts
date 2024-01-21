import * as yup from 'yup';

import type { PredictionParamsType } from '@/types/predition';

export const INITIAL_PREDICTION: PredictionParamsType = {
  algorithm: '',
  variable: '',
  'training-hours': 4000,
  'prediction-hours': 24,
};

export const validationSchema = yup.object().shape({
  algorithm: yup.string().required('Required'),
  variable: yup.string().required('Required'),
  'training-hours': yup.number().required('Required'),
  'prediction-hours': yup.number().required('Required'),
});

export type PredictionParamsType = {
  algorithm: string;
  variable: string;
  'training-hours': number;
  'prediction-hours': number;
};

export type PredictionType = {
  diseases: string;
  link: string;
  ok: boolean;
  testing_error: number;
};

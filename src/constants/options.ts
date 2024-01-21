import arrayToOptions from '@/utils/arrayToOptions';

export const algorithms = [
  'prophet',
  'rnn',
  'rnn_auto',
  'seq2seq',
  'seq2seq_auto',
];

export const algorithmsOptions = [
  { value: '', name: 'Algorithm' },
  ...arrayToOptions(algorithms),
];

export const variables = [
  'Timestamp',
  'temp1',
  'pres',
  'umid',
  'temp2',
  'V450',
  'B500',
  'G550',
  'Y570',
  'O600',
  'R650',
  'temps1',
  'temps2',
  'lumina',
];

export const variablesOptions = [
  { value: '', name: 'Variables' },
  ...arrayToOptions(variables),
];

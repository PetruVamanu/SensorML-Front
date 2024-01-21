import React from 'react';

import { Loading } from '@/components/Loading';
import type { PredictionType } from '@/types/predition';

import styles from './Graphic.module.css';

export type GraphicProps = {
  prediction: PredictionType | null;
  loading: boolean;
};

export const Graphic: React.FC<GraphicProps> = ({ prediction, loading }) => {
  const { diseases, link } = prediction || {};

  if (loading) {
    return (
      <div className={styles.graphic}>
        <Loading />
      </div>
    );
  }

  if (!prediction || !prediction.ok) {
    return (
      <div className={styles.graphic}>No grapic to show at the moment.</div>
    );
  }

  return (
    <div className={styles.graphic}>
      <div className="text-4xl font-bold">Graphic</div>
      <div className="py-4 text-2xl font-bold">
        Possible Diseases: {diseases}
      </div>
      <img src={link} alt="Graphic" />
    </div>
  );
};

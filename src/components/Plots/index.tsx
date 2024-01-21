import React, { useEffect, useState } from 'react';

import styles from './Plots.module.css';

export const Plots: React.FC = () => {
  const [boxPlot, setBoxPlot] = useState(null);
  const [matrixPlot, setMatrixPlot] = useState(null);

  const handleBoxPlot = async () => {
    try {
      const response = await fetch(`http://localhost:5000/box-plots`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Box plot', { data });
      setBoxPlot(data.link);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMatrixPlot = async () => {
    try {
      const response = await fetch(`http://localhost:5000/correlation-matrix`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Matrix Plots', { data });
      setMatrixPlot(data.link);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleBoxPlot();
    handleMatrixPlot();
  }, []);
  console.log({ boxPlot, matrixPlot });

  return (
    <div className={styles.plotcontainer}>
      <div className="text-4xl font-bold">Plots</div>
      {/* <div className="py-4 text-2xl font-bold"></div>/ */}
      {boxPlot && matrixPlot ? (
        <>
          <div className={styles.plot}>
            <img src={boxPlot} alt="Box Plot" />
          </div>
          <div className={styles.plot}>
            <img src={matrixPlot} alt="Matrix Plot" />
          </div>
        </>
      ) : (
        <div className={styles.plot}>
          <div className="text-2xl font-bold">No Data</div>
        </div>
      )}
    </div>
  );
};

import { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface IProps {}

const Counter: FC<IProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.Counter}>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;

import { FC, useState } from 'react';
import './Counter.css';

interface IProps {}

export const Counter: FC<IProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

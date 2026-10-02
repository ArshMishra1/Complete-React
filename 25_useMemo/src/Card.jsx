import { useMemo } from "react";

const Card = () => {
  const expensive = () => {
    for (let i = 1; i <= 100; i++) {}
    return 2;
  };

  const result = useMemo(() => {
    return expensive();
  }, []);

  return <div>{result}</div>;
};

export default Card;





import { useEffect } from 'react';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

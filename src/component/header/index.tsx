import { useEffect } from 'react';

interface IProps {}

const Header = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;

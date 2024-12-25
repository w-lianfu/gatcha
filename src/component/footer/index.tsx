import { useEffect } from 'react';

interface IProps {}

const Footer = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;

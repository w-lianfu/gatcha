import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {}

const DPaper = styled(Paper)({});

const PartiesInfo = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <h1>Parties Info Page</h1>
      <NavLink to="/home">
        <Button variant="contained" color="black">To Home</Button>
      </NavLink>
    </DPaper>
  );
};

export default PartiesInfo;

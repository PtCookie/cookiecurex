import React from 'react';
import { Button } from '@mui/material';

function ContainerBtn({ children }: { children: string }) {
  return <Button variant={'contained'}>{children}</Button>;
}

export default ContainerBtn;

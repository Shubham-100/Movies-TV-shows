import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <React.Fragment>
        <Stack spacing={100}>
        <Pagination count={10} variant="outlined" color="primary"  className='pagination'/>
        </Stack>
    </React.Fragment>
  );
}

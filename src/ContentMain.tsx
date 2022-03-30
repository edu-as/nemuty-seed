
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ContentMain() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 15,
    maxColumns: 11,
    
  });

  return (
    <div style={{ height: 600, width: '70%' }}>
      <DataGrid
        {...data}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        
      />
    </div>
  );
}

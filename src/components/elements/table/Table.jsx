'use client'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import './table.module.scss'

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: 'rgba(65, 65, 65, 0.4)',
  },
  [`& .${gridClasses.row}`]: {
    minWidth: '100%',
    minHeight: '49px !important',
    maxHeight: '49px !important',
    fontSize: '20px',
    fontWeight: '300',
    fontFamily: 'Inter',
  },
  '&.MuiDataGrid-root': {
    width: '100%',
    color: 'rgba(230, 230, 230, 0.90)',
    border: 'none',
  },
  '.MuiDataGrid-withBorderColor': {
    borderColor: 'transparent'
  },
  '.MuiDataGrid-columnHeaders': {
    maxHeight: '36px !important',
    minHeight: '36px !important',
    lineHeight: '36px !important',
    fontSize: '16px',
    fontWeight: '300',
    fontFamily: 'Inter',
    borderBottom: '1px solid rgba(15, 15, 15, 0.50)',
    borderTop: '1px solid rgba(15, 15, 15, 0.50)',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
  },
  '.MuiDataGrid-columnHeader': {
    height: '36px !important',
  },
  '.MuiDataGrid-columnSeparator': {
    visibility: 'visible',
    color: 'rgba(15, 15, 15, 0.50)',
  },
  '.MuiDataGrid-cell': {
    minHeight: '49px !important',
    maxHeight: '49px !important',
    padding: '0'
  },
  '.MuiDataGrid-virtualScroller': {
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(15, 15, 15, 0.50)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(217, 217, 217, 0.40)',
    }
  },
  '.MuiDataGrid-virtualScrollerContent': {
    overflow: 'hidden',
    width: '100% !important',
  },
  '.MuiDataGrid-virtualScrollerRenderZone': {
    width: '100%'
  },
  '.MuiToolbar-root': {
    color: 'rgba(179, 179, 179, 0.70)'
  }
}));

const Table = ({columns, rows}) => {
  return (
      <Box sx={{ 
        height: '400px',
        width: '100%',
        '@media (min-width: 794px)': {
          height: '400px',
        },
        '@media (min-width: 1025px)': {
          height: '500px',
        },
        '@media (min-width: 1549px)': {
          height: '600px',
        },
        '@media (min-width: 1701px)': {
          height: '680px',
        },
      }}>
        <StripedDataGrid 
          rows={rows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          pageSizeOptions={[12]}
          disableRowSelectionOnClick
          disableColumnMenu={true}
        />
      </Box>
  );
};

export default Table

'use client'
import Table from '@/components/elements/table/Table';
import styles from './tableBlock.module.scss'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { styled } from '@mui/material/styles';

const StyledDay = styled(DatePicker)(({ theme }) => ({
  '&.MuiTextField-root': {
    backgroundColor: 'rgba(65, 65, 65, 0.4)',
    borderRadius: '12px',
    height: '49px', 
  },
  '.MuiInputBase-input': {
    padding: '13.5px 14px',
    '&::placeholder': {
      color: 'rgba(204, 204, 204, 1)'
    }
  },
  '.MuiOutlinedInput-notchedOutline': {
    outline: 'none',
    border: 'none'
  }
}));

const TableBlock = ({ columns, rows }) => {

  return (
    <div className={styles.tableBlock}>
      <div className={styles.tableBlock__inputs}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label className={styles.tableBlock__inputs__label}>
            <span className={styles.tableBlock__inputs__label__text}>start date</span>
            <StyledDay />
          </label>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label className={styles.tableBlock__inputs__label}>
            <span className={styles.tableBlock__inputs__label__text}>end date</span>
            <StyledDay />
          </label>
        </LocalizationProvider>
        <label className={styles.tableBlock__inputs__label}>
          <span className={styles.tableBlock__inputs__label__text}>event id</span>
          <input type="text" placeholder="Event id" className={styles.tableBlock__input} />
        </label>
      </div>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default TableBlock

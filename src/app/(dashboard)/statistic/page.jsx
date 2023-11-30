import ChartsBlock from "@/components/modules/statisticPage/chartsBlock/ChartsBlock";
import TableBlock from "@/components/modules/statisticPage/tableBlock/TableBlock";
import styles from "./page.module.scss";

export default function Statistic() {

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 100, align:'center', headerAlign: 'center' },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align:'center'
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align:'center'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align:'center'
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <ChartsBlock />
        <TableBlock columns={columns} rows={rows} />
      </div>
    </main>
  );
}

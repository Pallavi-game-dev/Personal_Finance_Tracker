import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import API from "../services/api";
import { useAuth } from '../context/AuthContext';

const Transactions = () => {
  const { user } = useAuth();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTransaction();
  }, []);

  async function getTransaction() {
    try {
      const response = await API.get(`/getTransaction?id=${user.id}`);
      setRows(response.data.data); // FIXED
    } catch (error) {
      alert(error.response?.data?.message || "Transaction not available");
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
      <TableHead className="!bg-teal-600 dark:!bg-teal-700">
      <TableRow>
        <TableCell className="!text-white !text-center !font-bold">Title</TableCell>
        <TableCell className="!text-white !text-center !font-bold">Amount</TableCell>
        <TableCell className="!text-white !text-center !font-bold">Type</TableCell>
        <TableCell className="!text-white !text-center !font-bold">Category</TableCell>
      </TableRow>
    </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="!bg-white-100 dark:!bg-teal-900 !text-gray-700 dark:!text-white" align="center">{row.title}</TableCell>
              <TableCell className="!bg-white-100 dark:!bg-teal-900 !text-gray-700 dark:!text-white" align="center">{row.amount}</TableCell>
              <TableCell className="!bg-white-100 dark:!bg-teal-900 !text-gray-700 dark:!text-white" align="center">{row.transaction_type}</TableCell>
              <TableCell className="!bg-white-100 dark:!bg-teal-900 !text-gray-700 dark:!text-white" align="center">
                {row.category?.category}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default Transactions;
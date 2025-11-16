import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const TransactionTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>DATE</TableCell>
                        <TableCell>DESCRIPTION</TableCell>
                        <TableCell>AMOUNT</TableCell>
                        <TableCell>TYPE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>26 Mar 2025</TableCell>
                        <TableCell>Payroll Deposit - Aurora Tech</TableCell>
                        <TableCell>$25,000</TableCell>
                        <TableCell>Deposit</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TransactionTable

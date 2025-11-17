import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Button
} from "@mui/material";

const transactions = [
    {
        date: "Dec 18, 2024",
        description: "Payroll Deposit - Aurora Tech",
        amount: 2850,
        type: "Deposit"
    },
    {
        date: "Dec 16, 2024",
        description: "Wire Transfer - Horizon Logistics",
        amount: -1250,
        type: "Transfer"
    },
    {
        date: "Dec 14, 2024",
        description: "Card Payment - Skyline Media",
        amount: -420,
        type: "Withdrawal"
    },
    {
        date: "Dec 11, 2024",
        description: "Incoming Transfer - Meridian Holdings",
        amount: 3300,
        type: "Deposit"
    },
    {
        date: "Dec 08, 2024",
        description: "Cash Withdrawal - Downtown Branch",
        amount: -300,
        type: "Withdrawal"
    }
];

export default function RecentTransactions() {
    return (
        <Box >
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid #e5e7eb",
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="h5" fontWeight={700}>
                            Recent transactions
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Track your credits and debits across all connected accounts.
                        </Typography>
                    </Box>

                    <Button variant="contained" >
                        Export CSV
                    </Button>
                </Box>

                <TableContainer sx={{ mt: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >DATE</TableCell>
                                <TableCell >DESCRIPTION</TableCell>
                                <TableCell >AMOUNT</TableCell>
                                <TableCell >TYPE</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {transactions.map((t, index) => (
                                <TableRow key={index}>
                                    <TableCell>{t.date}</TableCell>
                                    <TableCell>{t.description}</TableCell>

                                    <TableCell
                                        sx={{
                                            color: t.amount > 0 ? "#16a34a" : "#dc2626",
                                            fontWeight: 400
                                        }}
                                    >
                                        {t.amount > 0
                                            ? `+${t.amount.toLocaleString()}`
                                            : `-${Math.abs(t.amount).toLocaleString()}`}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={t.type}
                                            size="small"
                                            sx={{
                                                backgroundColor:
                                                    t.type === "Deposit"
                                                        ? "rgba(34,197,94,0.1)"
                                                        : "rgba(244,63,94,0.1)",
                                                color:
                                                    t.type === "Deposit"
                                                        ? "#16a34a"
                                                        : "#dc2626",
                                                fontWeight: 400,
                                                borderRadius: "16px",
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

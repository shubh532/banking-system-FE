import React from "react";
import {
  Box,
  Card,
  Typography,
  Grid2,
  Stack,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import FilterListIcon from "@mui/icons-material/FilterList";
import MovingIcon from '@mui/icons-material/Moving';

type Transaction = {
  id: number;
  description: string;
  category: string;
  date: string;
  account: string;
  amount: number;
  type: "income" | "expense";
  status: "Completed" | "Pending";
};

const transactions: Transaction[] = [
  {
    id: 1,
    description: "Payroll Deposit - Aurora Tech",
    category: "Income",
    date: "Dec 22, 2024",
    account: "Savings",
    amount: 2850,
    type: "income",
    status: "Completed",
  },
  {
    id: 2,
    description: "Card Payment - Skyline Media",
    category: "Utilities",
    date: "Dec 21, 2024",
    account: "Savings",
    amount: -420,
    type: "expense",
    status: "Completed",
  },
  {
    id: 1,
    description: "Payroll Deposit - Aurora Tech",
    category: "Income",
    date: "Dec 22, 2024",
    account: "Savings",
    amount: 2850,
    type: "income",
    status: "Completed",
  },
  {
    id: 2,
    description: "Card Payment - Skyline Media",
    category: "Utilities",
    date: "Dec 21, 2024",
    account: "Savings",
    amount: -420,
    type: "expense",
    status: "Completed",
  },
];

const SummaryCard = ({
  title,
  value,
  subtitle,
  color,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
}) => (
  <Card
    sx={{
      p: 2.5,
      borderRadius: 4,
      height: "100%",
    }}
  >
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" color="text.secondary">
        {title}
      </Typography>
      <Box>{icon}</Box>
    </Stack>

    <Typography  variant="h5" fontWeight={600} color={color}>
      {value}
    </Typography>

    <Typography variant="caption" color="text.secondary">
      {subtitle}
    </Typography>
  </Card>
);

export const TransactionsPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700}>
        Transactions
      </Typography>
      <Typography variant="body1" mt={1} color="text.secondary">
        View and manage all your account transactions
      </Typography>

      <Grid2 container spacing={2} mt={3}>
        <Grid2 size={{xs:4}}>
          <SummaryCard
            title="Total Transactions"
            value="12"
            subtitle="All time"
            color="#111"
            icon={<MovingIcon />}
          />
        </Grid2>

        <Grid2 size={{xs:4}}>
          <SummaryCard
            title="Total Deposits"
            value="$7,675.00"
            subtitle="Income received"
            color="#0CA854"
            icon={<SouthWestIcon color="success" />}
          />
        </Grid2>

        <Grid2 size={{xs:4}}>
          <SummaryCard
            title="Total Withdrawals"
            value="$1,794.00"
            subtitle="Spending"
            color="#D90000"
            icon={<NorthEastIcon color="error" />}
          />
        </Grid2>
      </Grid2>

      <Card sx={{ p: 3, mt: 4, borderRadius: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Transaction History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Showing {transactions.length} transactions
            </Typography>
          </Box>

          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{ borderRadius: 3 }}
          >
            Show Filters
          </Button>
        </Stack>

        <Table sx={{ mt: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transactions.map((t) => (
              <TableRow key={t.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: t.type === "income" ? "#E8F7ED" : "#FEECEC",
                        color: t.type === "income" ? "#0CA854" : "#D90000",
                      }}
                    >
                      {t.type === "income" ? (
                        <SouthWestIcon fontSize="small" />
                      ) : (
                        <NorthEastIcon fontSize="small" />
                      )}
                    </Box>

                    <Box>
                      <Typography >{t.description}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t.category}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell>{t.date}</TableCell>

                <TableCell>
                  <Chip
                    label={t.account}
                    size="small"
                    sx={{ bgcolor: "#F3F4F8", borderRadius: 2 }}
                  />
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: t.amount > 0 ? "#0CA854" : "#D90000",
                  }}
                >
                  {t.amount > 0
                    ? `+$${t.amount.toLocaleString()}`
                    : `$${Math.abs(t.amount).toLocaleString()}`}
                </TableCell>

                <TableCell>
                  <Chip
                    label={t.status}
                    color="secondary"
                    size="small"
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default TransactionsPage;

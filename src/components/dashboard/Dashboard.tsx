import { Stack, Typography } from '@mui/material'
import AccountCard from './AccountCard'
import TransactionTable from './TransactionTable'

const Dashboard = () => {
    return (
        <div>
            <Typography variant='h5' fontWeight={700}>
                Welcome, Shubham Mahulkar 👋🏻
            </Typography>
            <Typography variant='body1' color='textSecondary'>
                Here’s your account overview
            </Typography>
            <Stack gap={2} direction={'row'}>
                <AccountCard />
                <AccountCard />
            </Stack>
                <TransactionTable />
        </div>
    )
}

export default Dashboard

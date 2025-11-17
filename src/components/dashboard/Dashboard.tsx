import {  Grid2, Stack, Typography } from '@mui/material'
import AccountCard from './AccountCard'
import TransactionTable from '../transactions/TransactionTable'
import QuickActionsCard from './QuickActions'

const Dashboard = () => {
    return (
        <div>
            <Typography my={1} variant='h5' fontWeight={700}>
                Welcome, Shubham Mahulkar 👋🏻
            </Typography>
            <Typography mb={1.5} variant='body1' color='textSecondary'>
                Here’s your account overview
            </Typography>
            <Stack gap={2} my={4} direction={'row'}>
                <AccountCard
                    type="Savings"
                    balance="$84,250.32"
                    accountNo="4444 5555 6666"
                    status="Active"
                    updatedAt="Updated 2 hours ago"
                    actionLabel="View details"
                    active
                    onAction={() => console.log('View details')}
                />

                <AccountCard
                    updatedAt='Updated 2 hours ago'
                    type="Current"
                    balance="Not Activated"
                    accountNo="9999 5555 6565"
                    status="Inactive"
                    actionLabel="Activate now"
                    onAction={() => console.log('Activate now')}
                />
            </Stack>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 8 }}>
                    <TransactionTable />
                </Grid2>
                <Grid2 size={{ xs: 4 }}>
                    <QuickActionsCard />
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Dashboard

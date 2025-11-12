import React from 'react';
import { Card, Box, Typography, Button, Chip } from '@mui/material';

interface AccountCardProps {
    type: 'Savings' | 'Current';
    balance?: string;           // e.g., "$84,250.32"
    accountNo?: string;         // e.g., "•••• 410"
    status: 'Active' | 'Inactive';
    updatedAt?: string;         // e.g., "Updated 2 hours ago"
    onAction?: () => void;      // Callback when button clicked
    actionLabel: string;        // e.g., "View details" / "Activate now"
    active?: boolean;           // Default: false
}

const AccountCard: React.FC<AccountCardProps> = ({
    type,
    balance,
    accountNo,
    status,
    updatedAt,
    onAction,
    actionLabel,
    active = false,
}) => {
    const gradientBg = 'linear-gradient(to bottom right, #6366F1, #8B5CF6)';
    const lightBg = 'linear-gradient(to bottom right, #F8FAFF, #FFFFFF)';

    return (
        <Card
            sx={{
                p: 3,
                borderRadius: 4,
                background: active ? gradientBg : lightBg,
                color: active ? '#FFFFFF' : '#1E293B',
                boxShadow: active
                    ? '0 6px 16px rgba(99, 102, 241, 0.25)'
                    : '0 2px 8px rgba(0, 0, 0, 0.05)',
                minWidth: 320,
                flex: 1,
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography
                    variant="subtitle2"
                    sx={{ letterSpacing: 3, opacity: active ? 0.9 : 0.7 }}
                >
                    {type.toUpperCase()} ACCOUNT
                </Typography>
                <Chip
                    label={status}
                    size="small"
                    sx={{
                        bgcolor: active ? 'rgba(255,255,255,0.2)' : '#E0E7FF',
                        color: active ? '#fff' : '#6366F1',
                        fontWeight: 600,
                    }}
                />
            </Box>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mt: 2,
                    mb: 1,
                    color: active ? '#fff' : '#1d2434ff',
                }}
            >
                {balance || 'Not Activated'}
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={1.5} mb={1.5}>
                <Typography
                    sx={{ fontWeight: 600, color: active ? '#fff' : '#1d2434ff', }}
                    variant="subtitle1"
                >
                    Account No:</Typography>
                <Typography
                    sx={{ fontWeight: 600, color: active ? '#fff' : '#1d2434ff', }}
                    variant="subtitle1"
                >
                    {accountNo}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography
                    sx={{ color: active ? '#fff' : '#1d2434ff', }}
                    variant="body2"
                >
                    Status:</Typography>
                <Typography
                    sx={{ color: active ? '#fff' : '#1d2434ff', }}
                    variant="body2"
                >
                    {active ? updatedAt : 'Not activated'}
                </Typography>
            </Box>

            <Button
                variant="contained"
                fullWidth
                onClick={onAction}
                sx={{
                    borderRadius: 8,
                    background: active
                        ? 'rgba(255, 255, 255, 1)'
                        : 'linear-gradient(to right, #6366F1, #8B5CF6)',
                    color: active ? '#6366F1' : '#fff',
                    textTransform: 'none',
                    '&:hover': {
                        background: active
                            ? '#e3e4fdff'
                            : 'linear-gradient(to right, #4F46E5, #7C3AED)',
                    },
                }}
            >
                {actionLabel}
            </Button>
        </Card>
    );
};

export default AccountCard;

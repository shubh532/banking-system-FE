import React from "react";
import {
    Box,
    Card,
    Typography,
    Stack,
    ButtonBase,
    useTheme,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SendIcon from "@mui/icons-material/Send";

type Action = {
    label: string;
    description: string;
    icon: React.ReactNode;
    active?: boolean;
};

const actions: Action[] = [
    {
        label: "Deposit",
        description: "Add funds instantly",
        icon: <ArrowDownwardIcon fontSize="small" />,
        active: true,
    },
    {
        label: "Withdraw",
        description: "Cash out",
        icon: <NorthEastIcon fontSize="small" />,
    },
    {
        label: "Transfer",
        description: "Move money",
        icon: <SendIcon fontSize="small" />,
    },
];

export const QuickActionsCard: React.FC = () => {
    const theme = useTheme();

    return (
        <Card sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" fontWeight={600}>
                Quick actions
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
                Manage funds with a single tap.
            </Typography>

            <Stack direction="column" spacing={2} mt={3}>
                {actions.map((action) => (
                    <ButtonBase
                        key={action.label}
                        sx={{
                            flex: 1,
                            p: 2,
                            borderRadius: 3,
                            alignItems: "center",
                            justifyContent:"flex-start",
                            display: "flex",
                            gap: 1,
                            bgcolor: action.active
                                ? theme.palette.primary.light + "33"
                                : "grey.100",
                            border: action.active
                                ? `2px solid ${theme.palette.primary.main}`
                                : "2px solid transparent",
                        }}
                    >
                        <Box
                            sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: action.active
                                    ? theme.palette.primary.light
                                    : "grey.200",
                            }}
                        >
                            {action.icon}
                        </Box>
                        <Stack>
                            <Typography fontWeight={600} textAlign={'start'}>{action.label}</Typography>
                            <Typography variant="caption"  textAlign={'start'}color="text.secondary">
                                {action.description}
                            </Typography>
                        </Stack>
                    </ButtonBase>
                ))}
            </Stack>
        </Card>
    );
};

export default QuickActionsCard;

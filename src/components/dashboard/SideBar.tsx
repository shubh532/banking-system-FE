import React, { Fragment } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import {
  DashboardRounded,
  ReceiptLongRounded,
  SendRounded,
  DownloadRounded,
  NorthEastRounded,
  AccountCircle,
  LogoutRounded,
  AllInclusiveRounded,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardRounded fontSize="small" />, route: "/dashboard" },
    { label: "Transactions", icon: <ReceiptLongRounded fontSize="small" />, route: "/transactions" },
    { label: "Transfer", icon: <SendRounded fontSize="small" />, route: "/transfer" },
    { label: "Deposit", icon: <DownloadRounded fontSize="medium" />, route: "/deposit" },
    { label: "Withdraw", icon: <NorthEastRounded fontSize="small" />, route: "/withdraw" },
    { label: "Open Account", icon: <AccountCircle fontSize="medium" />, route: "/open-account" },
    { label: "Profile", icon: <AccountCircle fontSize="medium" />, route: "/profile" },
    { label: "Logout", icon: <LogoutRounded fontSize="small" />, route: "/logout" },
  ];

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Fragment>
      <Box>
        <Box display="flex" alignItems="center" mb={4}>
          <Stack
            sx={{
              bgcolor: "#717cf4ff",
              width: 40,
              height: 40,
              mr: 1.5,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: "5px 5px 10px -5px #ffffff45",
            }}
          >
            <AllInclusiveRounded />
          </Stack>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, letterSpacing: 2 }}>
              AURORA
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Digital Bank
            </Typography>
          </Box>
        </Box>

        {/* Menu Items */}
        <List sx={{ p: 0 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.route);
            return (
              <ListItemButton
                key={item.label}
                onClick={() => handleNavigate(item.route)}
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 36,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: { color: "#fff" },
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Fragment>
  );
};

export default Sidebar;

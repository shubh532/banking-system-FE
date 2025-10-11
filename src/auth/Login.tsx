import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Login.module.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { Link } from "react-router";

interface LoginFormData {
  email: string;
  password: string;
}

const dummyUser = {
  email: "user@example.com",
  password: "123456",
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.email === dummyUser.email &&
      formData.password === dummyUser.password
    ) {
      alert("Login successful ✅");
      setError("");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <Box className={styles.lgMainContainer}>
      <Paper className={styles.lgFormPaper}>
        <Typography variant="h5" className={styles.lgHeading}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack gap={3}>
            <TextField
              label="Email"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              type="email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              label="Password"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              variant="standard"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyRoundedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffRoundedIcon />
                        ) : (
                          <VisibilityRoundedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {error && (
              <Typography variant="body2" color="error" >
                {error}
              </Typography>
            )}

            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>

            <Link className={styles.lgCreateAcLink} to="/auth/create-account">
              Create New Account
            </Link>
          </Stack>
        </form>
      </Paper>

      <Box className={styles.lgCircle} />
    </Box>
  );
};

export default Login;

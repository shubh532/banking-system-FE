import { useState } from "react";
import {
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import styles from "./CreateAccount.module.css";
import { Grid } from "@mui/system";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Link } from "react-router";


interface CreateAccountForm {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    pan: string;
    mobile: string;
    accountType: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    [key: string]: string;
}


const CreateAccount = () => {
    const [formData, setFormData] = useState<CreateAccountForm>({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        pan: "",
        mobile: "",
        accountType: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: any) => {
        setFormData((prev) => ({ ...prev, accountType: e.target.value }));
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.pan.trim()) newErrors.pan = "PAN is required";
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan))
            newErrors.pan = "Invalid PAN format (e.g. ABCDE1234F)";

        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
        else if (!/^[6-9]\d{9}$/.test(formData.mobile))
            newErrors.mobile = "Invalid mobile number";

        if (!formData.accountType) newErrors.accountType = "Select account type";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword.trim())
            newErrors.confirmPassword = "Confirm your password";
        else if (formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Account created successfully ✅");
            console.log("Form Data:", formData);
        }
    };

    return (
        <div className={styles.caMainContainer}>
            <Paper className={styles.caFormPaper}>
                <Typography variant="h5" className={styles.acHeading}>
                    Create your account
                </Typography>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                error={!!errors.address}
                                helperText={errors.address}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                type="email"
                                variant="standard"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
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
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="PAN"
                                name="pan"
                                value={formData.pan}
                                onChange={handleChange}
                                error={!!errors.pan}
                                helperText={errors.pan}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <BadgeRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="Mobile"
                                type="number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                error={!!errors.mobile}
                                helperText={errors.mobile}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIphoneRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <FormControl required fullWidth variant="standard" error={!!errors.accountType}>
                                <InputLabel>Account Type</InputLabel>
                                <Select
                                    label="Account Type"
                                    value={formData.accountType}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value={"SAVING"}>Saving</MenuItem>
                                    <MenuItem value={"CURRENT"}>Current</MenuItem>
                                </Select>
                                <Typography variant="caption" color="error">
                                    {errors.accountType}
                                </Typography>
                            </FormControl>
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <TextField
                                required
                                fullWidth
                                variant="standard"
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <Button sx={{ my: 1.5 }} onClick={handleSubmit} variant="contained" fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                <Typography className={styles.caLink}>
                    <Link to={"/auth/Login"}>Already have an account?</Link>
                </Typography>
            </Paper>
        </div>
    );
};

export default CreateAccount;

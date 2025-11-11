import { Typography,} from '@mui/material';

const AccountCard = () => {
    return (
        <div 
        style={{
            padding:"20px",
            borderRadius:20,
            marginTop:15,
            color:'#fff',
            minWidth:400,
            background: "linear-gradient(to bottom right, #6366f1)"
        }}
        >
            <Typography variant='caption'>SAVING ACCOUNT</Typography>
            <Typography marginTop={1} fontWeight={700} variant='h5'>
                $840,000.55
            </Typography>
            <Typography marginTop={2}>
                Account No : 88997744556633
            </Typography>
            <Typography marginTop={2} variant='caption' >
                Updated 2 hours ago
            </Typography>
        </div>
    );
};

export default AccountCard;

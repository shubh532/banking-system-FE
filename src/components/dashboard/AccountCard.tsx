import { Typography,} from '@mui/material';

const AccountCard = () => {
    return (
        <div 
        style={{
            boxShadow:'0px 0px 5px 2px #9d9d9d80',
            padding:"20px",
            borderRadius:8,
            marginTop:15,
            minWidth:400,
        }}
        >
            <Typography variant='caption'>SAVING ACCOUNT</Typography>
            <Typography marginTop={1} fontWeight={700} variant='h5'>
                $840,000.55
            </Typography>
            <Typography marginTop={2}>
                Account No : 88997744556633
            </Typography>
            <Typography marginTop={2}>
                Updated 2 hours ago
            </Typography>
        </div>
    );
};

export default AccountCard;

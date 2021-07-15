import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router';
import Header from '../header';
<Header />
function Login() {
    <Header />
     let history=useHistory();
     const [userName, setUserName] = React.useState("");
     const [password, setPassword] = React.useState("");
const doLogin=()=>{
     console.log(userName,password,"----")
     localStorage.setItem("userName", userName)
     localStorage.setItem("password", password)
    history.push('/Account');
}

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
    
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid> 
                <TextField label='Username' placeholder='Enter username' type="[A-Z]{1}[a-z]{7}" title="start with capital letter!" onChange={(e) => { setUserName(e.target.value)}} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' title="start with correct password!" onChange={(e) => { setPassword(e.target.value)}} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={doLogin} fullWidth>Sign in</Button>
                <Typography >
                     <Link href='ForgotPassword' >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography >Do you have an account?
                     <Link href='signin' >
                        Register 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
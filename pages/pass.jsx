import { Checkbox } from 'antd'
import React, {useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {message, Space } from 'antd';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Pass() {
const[state,setstate]=useState("");
const[Stringsss,setStringss]=useState("");
const[uperrcase,setuppercase]=useState("");
const[Symbols,setSymbols]=useState("");
const[Concat,setConcat]=useState([]);

let result1;
let result2;
let result3;
const RangesHandler=()=>{
    let input_length=document.getElementById("volume").value
    let result = "".concat(state,"", Stringsss, "", uperrcase,"",Symbols);
    let final=""
     for (var i = 0; i < input_length; i++){
         final += result. charAt(Math. floor(Math. random() * result. length));
          setConcat(final)
     }
}

 
function Lowercase(){
    let input_length=document.getElementById("volume").value
     result1 = '';
    let chars ='abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < input_length; i++){
        result1 += chars. charAt(Math. floor(Math. random() * chars. length));
    }
    setStringss(result1)
    // console.log(result); 
}

function UPPERCASE(){
     result2 = '';
    let input_length=document.getElementById("volume").value
    let chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < input_length; i++){
        result2 += chars. charAt(Math. floor(Math. random() * chars. length));
    }
    setuppercase(result2)
    // console.log(result);
} 

function NUMBER(){
    let numberswala=document.getElementById("volume").value;
    let min=0;
    let max=numberswala;
    min = Math.ceil(min);
    max = Math.floor(max);
    let numbers= Math.floor(Math.random() * (max - min + 1) + min); 
    // console.log(numbers);
    setstate(numbers);
}
function SYMBOL(){
     result3 = '';
    let input_length=document.getElementById("volume").value
    let chars ='~!@#$%^&*()_+<>?:"{}|';
    for (var i = 0; i < input_length; i++){
        result3 += chars. charAt(Math. floor(Math. random() * chars. length));
    }
    setSymbols(result3)
}
function myFunction() {
  navigator.clipboard.writeText(Concat);
}

const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Copied!',
    });
  };
  function appBarLabel(label) {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <h1 style={{textAlign:"center"}}> </h1>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('Password Generator')}
        </AppBar>
    </Stack>
    <br />
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>{Concat}</Item>
      </Stack>
    </Box>
    <br />
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
 
  <Card sx={{ maxWidth: 800 , overflow: "auto" }}>
  <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <input type="range" id="volume" name="volume" style={{width: "100%"}} min="1" max="50" placeholder='Range' onChange={RangesHandler}/>

         <br />
        </Typography>
        <Typography variant="h5" component="div">
        Customize Your Password!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {contextHolder}
        <Space style={{textAlign: "center",margin:"auto"}}>
  <h1>
    <Button onClick={success}>
      <Button style={{border: "1px solid"}} onClick={myFunction}>COPY PASSWORD</Button>
    </Button>
  </h1>
  {" "}
  <Button variant="outlined" onClick={refreshPage}>Refresh</Button>
</Space>

        </Typography>
        <Typography variant="body2">
      <Checkbox onChange={Lowercase}>LOWERCASE</Checkbox>
      <Checkbox onChange={UPPERCASE}>UPPERCASE</Checkbox>
      <Checkbox onChange={NUMBER}>NUMBERS</Checkbox>
      <Checkbox onChange={SYMBOL}>SYMBOL</Checkbox>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shubham Tribhuvan</Button>
      </CardActions>
  </Card>
</div>
    </>
  )
}

import React,{useState} from 'react'
import axios from 'axios';
const Formdetail = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [dbname,setdbname]=useState('');

    const testconnection=()=>{
        axios.post('http://localhost/generator/api/testc.php',{
            username:username,
            password:password,
            dbname:dbname
        }).then((resul)=>{
            console.log(resul.data);
        })
    }
    return (
        <div>
            <input type="text" value={username} placeholder='username' onChange={(val)=>setusername(val.target.value)} />
            <input type="password" value={password} placeholder='password' onChange={(val)=>setpassword(val.target.value)}/>
            <input type="text" value={dbname} placeholder='DB name' onChange={(val)=>setdbname(val.target.value)}/>
            <button onClick={()=>{testconnection();}}>test connection</button>
            <button onClick={()=>{testconnection();}}>Generate</button>
        </div>
    )
}

export default Formdetail

const express = require('express')
const app = express();
app.use(express.json())
app.listen (9000, () => console. 
log("ok"));

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:''
})

app.get('/',(req,res)=>{
    res.send("Mayara e Inae")
    

})

const getAllpessoas = async () => {
    const [query] = await connection
    .execute('select * from testepessoa.pessoa');
    return query;
    }
    
app.get('/pessoa', async (req,res) => {
    const consulta = await getAllpessoas();
    return res.status(200).json(consulta);
    })
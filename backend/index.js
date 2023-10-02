const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.listen (9000, () => console. log("ok"));

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
    .execute('select * from testepessoa.pessoas');
    return query;
    }
    
app.get('/pessoa', async (req,res) => {
    const consulta = await getAllpessoas();
    return res.status(200).json(consulta);
    })


app.get('/pessoa/:id', async (req, res)=>{
    const {id} = req.params;
    const {query} = await connection.execute('select * from testepessoa.pessoas where id = ?' , {id});
    if(query.length === 0) return res.status (400).json({mensagem: ' Nao encontrado.'})
    return res.status(200).json(query);
    })

app.post('/pessoa', async (req,res)=>{
    const {nome, email} = req.body;
    const [query]= await connection.execute('insert testepessoa.pessoas (nome,email) values(?, ?)',
    [nome,email])
    return res.status(200).json(query);
} )

app.put('/pessoa/:id', async (req, res) => {
    const {nome, email} = req.body
    const [query] = await connection.execute('update testepessoa.pessoas set (nome,email) values(?,?)', [nome,email])
    return res.status(200).json(query)
})

app.delete('/pessoa/:id', async (req,res)=>{
    const { id } = req.params
    const [query] = await connection.execute('delete from testepessoa.pessoas where id = ?', [id])
    return res.status(200).json(query)
})

/* doador */
    
const getAlldoador = async () => {
    const [query] = await connection
    .execute('select * from nome_do_banco_de_dados.doador');
    return query;
    }
    
app.get('/doador', async (req,res) => {
    const consulta = await getAlldoador();
    return res.status(200).json(consulta);
    })


app.get('/doador/:id', async (req, res)=>{
    const {id} = req.params;
    const {query} = await connection.execute('select * from nome_do_banco_de_dados.doador id = ?' , {id});
    if(query.length === 0) return res.status (400).json({mensagem: ' Nao encontrado.'})
    return res.status(200).json(query);
    })

app.post('/doador', async (req,res)=>{
    const {id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco } = req.body;
    const [query]= await connection.execute('insert nome_do_banco_de_dados.doador (id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco) values(?, ?, ?, ?, ?, ?, ?)',
    [id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco])
    return res.status(200).json(query);
} )

app.put('/doador/:id', async (req, res) => {
    const {id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco} = req.body
    const [query] = await connection.execute('update nome_do_banco_de_dados.doador set (id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco) values(?, ?, ?, ?, ?, ?, ?)', [id, nome_completo, nome_usuario, email, senha, numero_telefone, endereco])
    return res.status(200).json(query)
})

app.delete('/doador/:id', async (req,res)=>{
    const { id } = req.params
    const [query] = await connection.execute('delete from nome_do_banco_de_dados.doador where id = ?', [id])
    return res.status(200).json(query)
})
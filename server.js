const express=require('express')
//rutas
const usuarioRoute=require('./rutas/Usuariosrouter')
const app=express();
app.use(express.json())

//cors

app.use('/api', usuarioRoute)
//servidor
app.listen(3000, ()=>console.log("Servidor corriendo")) //localhost

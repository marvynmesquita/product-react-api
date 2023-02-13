const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



//cors
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", '*');
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Credentials", true);
    app.use(cors());
    next();
});
//forma de ler json
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())



//rotas da api

const productRoutes = require('./routes/productRoutes')

app.use('/product', productRoutes)

// rota inicial 
app.get('/', (req, res) =>{

    res.json({message: 'Está funcionando'})
    
})

const senha = encodeURIComponent('VerZwC62n5IWWrsr')
const user = 'Nilson'

mongoose.connect(`mongodb+srv://${user}:${senha}@cluster0.mtwp5px.mongodb.net/?retryWrites=true&w=majority`)
.then(() =>{
    console.log('Conectamos ao MongoDB!')
    app.listen(5000)
})
.catch((err) => console.log(err))

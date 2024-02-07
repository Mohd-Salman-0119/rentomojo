const {express} = require('./imports/modules.imports')

const app = express();

app.get('/ping',(req,res)=>{
     res.send({message: "Pong"});
})

app.listen(8000, ()=>{
     console.log("Server is runing on PORT: ")
})
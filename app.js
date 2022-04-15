const express = require("express"); const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get("/", (req, res) => {
   res.send("<h2>Home</h2>");
})


app.post("/bfhl", (req, res) => {
   const {data} = req.body;
   let numbers = []
   let alphabets = []
   let is_success = true;
   if(!data){
    is_success = false;
  	return res.json({"is_success" : false,"user_id" : "harsh_gawli_18052002","email":"harsh.gawli1973@gmail.com","roll_number":"0827IT191045","numbers":numbers,"alphabets":alphabets});
   }
   for(a of data){
       if(isNaN(a)){
           alphabets.push(a);
       }
       else{
           numbers.push(Number(a));
       }
   }
   if(is_success === true){
       return res.json({"is_success" : true, "user_id" : "harsh_gawli_18052002","email" : "harsh.gawli1973@gmail.com","roll_number" : "0827IT191045","numbers" : numbers,"alphabets" : alphabets});
   }
   
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening at port ${port}`));
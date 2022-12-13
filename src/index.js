const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.get("/", (req, res)=>
{
    
    
        res.write("Hello World!")
        res.end()
    
   
})


app.post("/add", (req,res)=>
{
 
    let sum= Number(req.body.num1) + Number(req.body.num2)


    if( typeof(req.body.num1) ==='string'||isNaN(req.body.num2))
    {
       
    res.json({'status':'failure', 
    'message': 'Invalid data types'})
    
}
if(sum<-(10**6))
{
    res.json({'status':'error', 
   'message': 'Underflow',
   })
}
if(sum>(10**6))
{
    res.json({'status':'error', 
   'message': 'Overflow',
   })
}

   res.json({'status':'success', 
   'message': 'the sum of given two numbers',
   'sum':`${sum}`})
})



app.post("/sub", (req,res)=>
{
 
    let sub= Number(req.body.num1) - Number(req.body.num2)


    if( typeof(req.body.num1) ==='string'||isNaN(req.body.num2))
    {
       
    res.json({'status':'failure', 
    'message': 'Invalid data types'})
    
}
if(sub<-(10**6))
{
    res.json({'status':'error', 
   'message': 'Underflow',
   })
}
if(sub>(10**6))
{
    res.json({'status':'error', 
   'message': 'Overflow',
   })
}

   res.json({'status':'success', 
   'message': 'the difference of given two numbers',
   'difference':`${sub}`})
})


app.post("/multiply", (req,res)=>
{
 
    let mul= Number(req.body.num1) * Number(req.body.num2)


    if( typeof(req.body.num1) ==='string'||isNaN(req.body.num2))
    {
       
    res.json({'status':'failure', 
    'message': 'Invalid data types'})
    
}
if(mul<-(10**6))
{
    res.json({'status':'error', 
   'message': 'Underflow',
   })
}
if(mul>(10**6))
{
    res.json({'status':'error', 
   'message': 'Overflow',
   })
}

   res.json({'status':'success', 
   'message': 'The product of given numbers',
   'result':`${mul}`})
})


app.post("/divide", (req,res)=>
{
 
    let div= Number(req.body.num1) / Number(req.body.num2)

   if(req.body.num2==0)
   {
    res.json({'status':'failure', 
    'message': 'Cannot divide by zero'})
   }
    if( typeof(req.body.num1) ==='string'||isNaN(req.body.num2))
    {
       
    res.json({'status':'failure', 
    'message': 'Invalid data types'})
    
}
if(div<-(10**6))
{
    res.json({'status':'error', 
   'message': 'Underflow',
   })
}
if(div>(10**6))
{
    res.json({'status':'error', 
   'message': 'Overflow',
   })
}

   res.json({'status':'success', 
   'message': 'The division of given numbers',
   'result':`${div}`})
})





app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;



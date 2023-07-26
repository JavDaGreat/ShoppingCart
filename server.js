import express from "express"
import cors from "cors"
import Stripe from "stripe"
const stripe=new Stripe(("sk_test_51NY8FnAfh3jftwL7Niiugq1S4Bz4kGqPFHmu9yZJOxoRn1IoRWnjcYjxonxPAlNeHMMCqP5exC8iobDZ8lMA8L5w00NIXW2HsF"))


const app =express()
  app.listen(4000,()=>console.log("listen on 4000"))

app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.post("/checkout",async (req,res)=>{

  const products=req.body.products
  let lineProducts=[]
  products.forEach((product)=>{
    lineProducts.push(
      {
        price:product.id,
        quantity:product.qty
      }
    )
  })
  console.log(lineProducts);

  const session=await stripe.checkout.sessions.create({
    line_items:lineProducts,
    mode:"payment",
    
    success_url:"http://localhost:5173/success",
    cancel_url:"http://localhost:5173/cancel"
  })

  res.send(JSON.stringify({
    url:session.url
  }))

})

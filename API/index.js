import express from "express";
import axios from "axios";
const app = express();
let authToken;
let products;
app.listen(8080, async () => {
  const Body = {
    companyName: "goMart",
    clientID: "98776b9c-a4fb-4f32-b5fa-d6067c92b653",
    clientSecret: "xNqZnpMQPsVYJWCl",
    ownerName: "Yash Patni",
    ownerEmail: "2021is_yashpatni_b@nie.ac.in",
    rollNo: "4NI21IS120",
  };
   authToken = await axios.post("http://20.244.56.144/test/auth",Body);
  console.log(authToken.data)
});
app.get('/categories/:categoryname/products', async (req, res) => {
    const categoryname = req.params.categoryname;
    const companies = req.companies.companies;
    const header=authToken.data.token_type+" "+authToken.data.access_token;
    products = await axios.get(`http://20.244.56.144/test/companies/${companies}/categories/${categoryname}/products?top=10&minPrice=1&maxPrice=1`,{headers: {Authorization: header}});
    console.log(products.data)
})
app.get('/categories/:categoryname/products/:productid', async (req, res) => {
    const categoryname = req.querry.categoryname;
    const productid = req.querry.productid;
    const header=authToken.data.token_type+" "+authToken.data.access_token;
    const productDescription = products.data.find(product => product.id === productid && categoryname === product.category);
    console.log(productDescription)
})

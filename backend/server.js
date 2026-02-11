const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let products = [
    {
        name: "Orange",
        price: 5,
        quantity: 10,
        img: "https://imgs.search.brave.com/yXIZURmP6CEtRQq5NH3UDg0j1MTCIeiCM1qzdeZeYcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM4LmRlcG9zaXRw/aG90b3MuY29tLzEw/MjA4MDQvODg0L2kv/NDUwL2RlcG9zaXRw/aG90b3NfODg0MDg4/NS1zdG9jay1waG90/by1vcmFuZ2UtZnJ1/aXRzLW9uLWEtd2hp/dGUuanBn"
    },
    {
        name: "Pomme",
        price: 5,
        quantity: 10,
        img: "https://imgs.search.brave.com/O5pLlPDb5Bt6rCICe1i3ir6DG7CdpMnzg6hTcFmLxb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvYlJxS1ZwMkY2/V0U3ZmtrVGg1Mmto/UWVELzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc"
    },
    {
        name: "Poire",
        price: 5,
        quantity: 10,
        img: "https://imgs.search.brave.com/rcK1TJqY8et1p7MypO7vJrRhDZVncV3Kw5oePcDgf6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE0/NjQyNjE0L3Bob3Rv/L3JlZC15ZWxsb3ct/cGVhci1mcnVpdC13/aXRoLWxlYWYtaXNv/bGF0ZWQtb24td2hp/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVCUUZLSEdG/TVRwZWc4d0MyaF9Z/a3lORzdrZXB4aGVf/U1pyUVRLcHJDc3M9"

    }
];

app.get('/get-products', (req, res) => {
    res.json(products);
});

app.post('/new-product', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json({ message: 'Produit ajouté !', product: newProduct });
});

app.listen(port, () => {
    console.log(`Backend lancé sur http://localhost:${port}`);
});
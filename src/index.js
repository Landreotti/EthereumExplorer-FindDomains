const express = require('express')

const app = express();

app.use(express.json());

// Route Params => Identificar um recurso, editar/deletar/buscar
// Query Params => Paginação / Filter
// Body Params => Objetos para inserção/alteração de um recurso (Json)

app.get("/domain", (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json(
        ["domains {id,name, label/Namelabel, hash}"]
    )
})

app.post("/domain", (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(
        ["domains {id,name, label/Namelabel, hash}"]
    )
})

app.put("/domain/:id", (request, response) => {
    const {id} = request.params;
    console.log(id)
    return response.json(
        ["domains {id,name, label/Namelabel, hash}", "domains {id,name, label/Namelabel, hash}", "domains {id,name, label/Namelabel, hash}", "domains {id,name, label/Namelabel, hash}"]
    )
})


app.patch("/domain/:id", (request, response) => {
    return response.json(
        ["domains {id,name, label/Namelabel, hash}"]
    )
})

app.delete("/domain/:id", (request, response) => {
    ["domains {id,name, label/Namelabel, hash"]
})

app.listen(3333);
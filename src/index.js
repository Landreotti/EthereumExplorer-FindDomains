const express = require('express')

const app = express();

app.get("/domain", (request, response) => {
    return response.json(
        ["domains {id,name, label/Namelabel, hash}"]
    )
})

app.post("/domain", (request, response) => {
    return response.json(
        ["domains {id,name, label/Namelabel, hash}"]
    )
})

app.put("/domain/:id", (request, response) => {
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
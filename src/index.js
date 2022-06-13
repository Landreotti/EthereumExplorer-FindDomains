const express = require('express')

const app = express();

app.get("/domains", (request, response) => {
    return response.json(
        ["domain: iam.alice.eth", "label:  iam", "label hash: keccak256(‘eth’) = 0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0", "node: The output of the namehash function, used to uniquely identify a name in EN",
        "domains(where: {name:'vitalik.eth'}) {id,name, label/Namelabel, hash"]
    )
})

//localhost:3333
app.listen(3333);
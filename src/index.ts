import express from "express"

const app = express();

app.get("/", (_, res) => {
    res.status(200).send("<h1>hello world</h1>")
})

console.log("aa")
console.log("aa")
console.log("aa")



app.listen(8080, () => console.log("listening server"))

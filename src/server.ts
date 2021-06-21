import express, { response } from "express";

const app = express();

app.get("/test", (request, reponse) => {
    return response.send("Deu bom!");
})

app.post("/test-post", (request, response) => {
    return response.send("Post também deu bom");
})

app.listen(3000, () => console.log("Server is running"));
const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const jwt = require('jsonwebtoken');


const { connect_to_db, ObjectId } = require("./db");

let { todos } = require("./data");

const port = 3000;

let app = express();

const prepopulate_db = async (db) => {
    const c = db.collection("todos");
    const todosWithoutIds = todos.map(todo => {
        return { title: todo.title, date: todo.date, done:  todo.done}
    });
    
    await c.insertMany(todosWithoutIds);
}

(async () => {
    let db;
    try {
        db = await connect_to_db();
    } catch(e) {
        console.log(e);
    }
    app.use(express.static("../client/dist/client/browser"));
    
    await db.collection("todos").drop();
    await prepopulate_db(db);

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.get("/api/todos",async (req, res) => {
        let todos;
        try {
            todos = await db.collection("todos").find({}).toArray();
        } catch(e){
            console.log(e)
        }

        res.send(todos);
    });
    
    app.post("/api/todos", async (req, res) => {
        let todo = req.body;
        try {
            const resp = await db.collection("todos").insertOne(todo);
            todo._id = resp.insertedId;
            res.send({ message: "Done", _id: todo._id});
        } catch(e){
            console.log(e)
        }
    })
    
    app.put("/api/todos/:id", async (req, res) => {
        let id = new ObjectId(req.params.id);
        try {
            let todo = await db.collection("todos").findOne({_id : id});
            todo.done = !todo.done;
            await db.collection("todos").updateOne({_id : id},{$set: {done: todo.done}});
            res.send({ message: "Done" });
        } catch(e){
            console.log(e)
        }

    });
    
    app.delete("/api/todos/:id", async (req, res) => {
        const _id = new ObjectId(req.params.id);
        try {
            await db.collection("todos").deleteOne({_id});
            res.send({ message: "Done"});
        } catch(e){
            console.log(e)
        }

    });

    app.post("/api/login", async (req,res) => {

        try {
        let jwtSecretKey = "najvecaTajnaIkad5544";
        let data = {
            ime: "Leopold Brodar"
        }
     
        const token = jwt.sign(data, jwtSecretKey, {expiresIn: '30m'});
     
        res.send({token});
        } catch(e) {
            console.log(e);
        }

    })
    
    
    app.listen(port, () => {
        console.log(`Server is listening at ${port}`);
    });
})()

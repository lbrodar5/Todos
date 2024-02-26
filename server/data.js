const crypto = require("crypto");

const todos = [
    {
      "title": "Finish homework",
      "date": "12/20/2023",
      "done": false,
      "id": crypto.randomUUID()
    },
    {
      "title": "Buy groceries",
      "date": "12/18/2023",
      "done": true,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Exercise",
      "date": "12/17/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Read a book",
      "date": "12/22/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Call a friend",
      "date": "12/25/2023",
      "done": true,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Prepare for presentation",
      "date": "12/19/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Go for a run",
      "date": "12/21/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Attend meeting",
      "date": "12/24/2023",
      "done": true,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Clean the house",
      "date": "12/16/2023",
      "done": true,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Write blog post",
      "date": "12/23/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Plan weekend trip",
      "date": "12/28/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Learn a new skill",
      "date": "12/26/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Organize files",
      "date": "12/27/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Attend webinar",
      "date": "12/30/2023",
      "done": false,
      "id": crypto.randomUUID()      
    },
    {
      "title": "Review project proposal",
      "date": "12/29/2023",
      "done": false,
      "id": crypto.randomUUID()      
    }
]

module.exports = {
    todos
};
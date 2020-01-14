const express = require('express');
const mc = require('./controllers/messages_controller.js')

const app = express();

app.use(express.json());

app.post('/api/messages', mc.createMessage)
app.get('/api/messages', mc.readMessage)
app.put('/api/messages/:id', mc.updateMessage)
app.delete('/api/messages/:id', mc.deleteMessage)

const port = 3001;

app.listen(port, () =>{
    console.log(`Server ${port} is online`)
});



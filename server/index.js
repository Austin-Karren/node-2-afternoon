const express = require('express')
const mc = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const baseUrl = "/api/messages";
app.post(baseUrl, mc.create);
app.get(baseUrl, mc.read);
app.put(`${baseUrl}/:id`, mc.update);
app.delete(`${baseUrl}/:id`, mc.delete);


const port = 3001;
app.listen(port, () => {
   console.log(`Server listening on port: #${port}`);
});
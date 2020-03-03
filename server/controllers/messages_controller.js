let messages = [];
let id = 0;

module.exports = {
   create: (req, res) => {
      const {text, time} = req.body;
      messages.push({id, text, time});
      id++;
      res.status(200).send(messages);
   },
   read: (req, res) => {
      res.status(200).send(messages);
   },
   update: (req, res) => {
      const {text} = req.body;
      const {id} = req.params;
      let obj = messages.find(message => +id === message.id);
      obj = {
         id: obj.id,
         text: text || obj.text,
         time: obj.time
      }
      let messageIndex = messages.findIndex(element => obj.id === element.id);
      messages.splice(messageIndex, 1, obj);
      res.status(200).send(messages);
   },
   delete: (req, res) => {
      const {id} = req.params;
      const index = messages.findIndex(message => +id === message.id);
      messages.splice(index, 1);
      res.status(200).send(messages);
   }
}
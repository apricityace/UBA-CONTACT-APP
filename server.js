const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let contacts = [];
let currentId = 1;

app.use(express.static(path.join(__dirname, 'frontend')));

app.post('/contacts', (req, res) => {
  const contact = {
    id: currentId++,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  };
  contacts.push(contact);
  res.send(contact);
});

app.get('/contacts', (req, res) => {
  res.send(contacts);
});

app.put('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts[index] = {
      id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone
    };
    res.send(contacts[index]);
  } else {
    res.status(404).send({ message: 'Contact not found' });
  }
});

app.delete('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  contacts = contacts.filter(contact => contact.id !== id);
  res.send({ message: 'Contact deleted' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

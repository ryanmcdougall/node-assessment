const express = require('express'),
      bodyParser = require('body-parser');

const ctrl = require('./usersCtrl.js')

const app = express();

app.use(bodyParser.json());

// Get All Users ::: 

app.get('/api/users', ctrl.getUsers)

// Get Users By Id + Null :::

app.get('/api/users/:id', ctrl.getUsersById)

// Get Admins :::

app.get('/api/admins', ctrl.getAllAdmins)

// Get Non Admins :::

app.get('/api/nonadmins', ctrl.getAllNonAdmins)

// Get Users By Type (user, moderator, admin) :::

app.get('/api/user_type/:id', ctrl.getUsersByType)

// Update Users By Id ::: 

app.put('/api/users/:id', ctrl.updateUsersById)

// Create New Users :::

app.post('/api/users', ctrl.createNewUsers)

// Delete Users :::

app.delete('/api/users/:id', ctrl.deleteUsers)


app.listen(3000, () => {
    console.log('Listening on:', 3000)
})
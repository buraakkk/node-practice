import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    // console.log(`User [${user.firstName}] added to the database.`);

    res.send(`User [${user.firstName}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`user with id ${req.params.id} has been deleted`);
};

export const updateUser =  (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    
    const user = users.find((user) => user.id ===id);
    
    if(firstName)  user.firstName = req.body.firstName;
    if(lastName)   user.lastName = req.body.lastName;
    if(age)        user.age = req.body.age;

    console.log(`username has been updated to ${user.firstName},age has been updated to ${user.age}`);
    res.send(`username has been updated to ${user.firstName}, user last name has been updated to ${user.lastName},age has been updated to ${user.age}`);
};

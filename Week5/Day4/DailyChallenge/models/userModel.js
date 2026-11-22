const db = require('../config/db');


const createUserWithTransaction= async ({ email, username, first_name, last_name, hashedPassword }) => {
    return await db.transaction(async (trx) => {
      const [newUser] = await trx('users')
        .insert({ email, username, first_name, last_name })
        .returning(['id', 'email', 'username', 'first_name', 'last_name']);

      await trx('hashpwd').insert({
        username: newUser.username,
        password: hashedPassword,
      });

      return newUser;
    });
};


const findHashByUsername= async (username) => {
    return await 
    db ('hashpwd')
    .where({ username }).first();
};

  
const getAllUsers= async () => {
    return await 
    db
    .select("*")
    .from('users');
};

  
const getUserById= async (id) => {
    return await 
    db
      .select("*")
      .from("users")
      .where({id})//the same as .where({id:id}) or .where("id",id)
      .first();
};

  
  const updateUserById= async (id, updates) => {
    const [updatedUser] = await db('users')
      .where({ id })
      .update(updates)
      .returning(['id', 'email', 'username', 'first_name', 'last_name']);
    return updatedUser;
  };


module.exports = {getAllUsers,getUserById,updateUserById,findHashByUsername,createUserWithTransaction};
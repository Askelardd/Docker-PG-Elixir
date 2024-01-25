/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('utilizadores').del()
  await knex('utilizadores').insert([
    {id: 1, username: 'zezim', userpassword: bcrypt.hashSync('1234', 10) },
    {id: 2, username: 'robim', userpassword: bcrypt.hashSync('1234', 10)},
    {id: 3, username: 'ofilo', userpassword: bcrypt.hashSync('1234', 10)},

  ]);
};

const { connection } = require('../../config');

const postNotesQuery = ({ title, content }) => {
  const sql = {
    text: 'INSERT INTO notes (title,content) VALUES ($1,$2) RETURNING *;',
    values: [title, content],
  };
  return connection.query(sql);
};

module.exports = { postNotesQuery };

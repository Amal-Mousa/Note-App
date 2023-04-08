const { postNotesQuery } = require('../../database');

const postNotesController = (req, res) => {
  let { title, content } = req.body;
  postNotesQuery({ title, content })
    .then((data) => res.status(200).json({
      error: false,
      data: {
        message: 'data created successfully',
        note: data.rows,
      },
    }))
    .catch((err) => res.status(500).json({
      error: true,
      data: {
        message: err.message,
      },
    }));
};

module.exports = { postNotesController };

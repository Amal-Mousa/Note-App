const { app } = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`srver is working on http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const indexRouter = require('./routes/index');
const valoresRouter = require('./routes/valores');
const skillsRouter = require('./routes/skills');
const proyectosRouter = require('./routes/proyectos');
const contactoRouter = require('./routes/contacto');

app.use('/', indexRouter);
app.use('/valores', valoresRouter);
app.use('/skills', skillsRouter);
app.use('/proyectos', proyectosRouter);
app.use('/contacto', contactoRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const express = require('express');

const app = express();

app.use(express.static('client/build'));


require('./routes/apiRoutes')(app);
require('./routes/reactRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
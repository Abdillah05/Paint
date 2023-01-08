const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);

const PORT = process.env.PORT || 5005;

app.ws('/', (ws,req) => {
    console.log('Подключение установлено');
})

app.listen(PORT, () => console.log(`listen port on ${PORT}`));

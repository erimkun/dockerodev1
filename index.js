console.log('Merhaba Dünya');
const app = require('express')();

app.get('/', (req, res ) => 
    res.json('Merhaba Dünya') 
);
const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
import app from './app';

let port = app.get('port');
app.listen(port);

console.log('Server on port: '+ port)
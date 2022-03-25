import {app} from './app';

const port = process.env.PORT || 3000;
const server= app.listen(port,()=>console.log(`Api is running in port ${port}`));

process.on('SIGINT',()=>{
    server.close();
    console.log(`Port ${port}, has been closed`);
});
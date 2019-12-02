const mysql=require ("mysql");

function connect()
{
    const connection = mysql.createConnection({
        host:"172.18.5.190 ",
        database:"devops",
        user:"root",
        password:"root",
        port:9099
    });
    connection.connect();
    return connection;
}

module.exports = {connect:connect};

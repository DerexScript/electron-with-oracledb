module.exports.oracleDbConfig = {
    user: "derex",
    password: "123123",
    connectString: "localhost:1521/XE", //Service Name
    poolMin: 1,
    poolMax: 10,
    poolIncrement: 1
};

module.exports.mysqlDbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'derex'
};
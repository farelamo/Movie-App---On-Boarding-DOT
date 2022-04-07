require('dotenv').config()

module.exports = {
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: true,
    dropSchema: false,
    synchronize: true,
    entities : ['dist/**/*.entity{.ts,.js}']
}
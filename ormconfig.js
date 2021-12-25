module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'password',
  database: 'hospitals',
  entities: ['dist/**/*.entity.js'],
  logging: true,
};

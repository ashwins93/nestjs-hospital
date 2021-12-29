module.exports = {
  type: 'postgres',
  // host: 'localhost',
  // port: 5432,
  // username: 'dev',
  // password: 'password',
  // database: 'hospitals',
  url:
    process.env.DATABASE_URL ||
    'postgres://dev:password@localhost:5432/hospitals',
  entities: ['dist/**/*.entity.js'],
  logging: true,
};

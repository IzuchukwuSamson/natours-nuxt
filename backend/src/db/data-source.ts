import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOPtions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3306,
  database: 'natours',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOPtions);
export default dataSource;

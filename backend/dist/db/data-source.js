"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOPtions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOPtions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'natours',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOPtions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map
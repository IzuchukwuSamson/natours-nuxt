"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const utils_1 = require("../../common/utils.");
let UserService = class UserService {
    constructor(repo) {
        this.repo = repo;
    }
    find(email) {
        return this.repo.find({ where: { email } });
    }
    async create(createUserDto) {
        const hashedPassword = await (0, utils_1.hashPassword)(createUserDto.password);
        const user = Object.assign(Object.assign({}, createUserDto), { password: hashedPassword });
        const createdUser = await this.repo.save(this.repo.create(user));
        return createdUser;
    }
    async findAll() {
        const users = await this.repo.find();
        return users;
    }
    async findOne(where) {
        const user = await this.repo.findOne(where);
        if (!user) {
            throw new common_1.NotFoundException(`There isn't any user with identifier: ${where}`);
        }
        return user;
    }
    async update(id, updateUser) {
        const user = await this.repo.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException(`There isn't any user with id: ${id}`);
        }
        Object.assign(user, updateUser);
        return this.repo.save(user);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
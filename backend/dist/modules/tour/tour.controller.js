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
exports.TourController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tour_service_1 = require("./tour.service");
const create_tour_dto_1 = require("./dto/create-tour.dto");
const update_tour_dto_1 = require("./dto/update-tour.dto");
const serialize_interceptor_1 = require("../serialize.interceptor");
const tour_dto_1 = require("./dto/tour.dto");
let TourController = class TourController {
    constructor(tourService) {
        this.tourService = tourService;
    }
    create(createTourDto) {
        return this.tourService.create(createTourDto);
    }
    findAll() {
        return this.tourService.findAll();
    }
    findOne(id) {
        return this.tourService.findOne(+id);
    }
    async getUserTours(req) {
        const { id } = req.user;
        return await this.tourService.findUserTours(id);
    }
    update(id, updateTourDto) {
        return this.tourService.update(+id, updateTourDto);
    }
    remove(id) {
        return this.tourService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Tour created successfully.',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiBody)({ type: [create_tour_dto_1.CreateTourDto] }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_dto_1.CreateTourDto]),
    __metadata("design:returntype", void 0)
], TourController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get all tours.',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TourController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get Tours related to a user.',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiParam)({ name: 'mytours' }),
    (0, common_1.Get)('mytours'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TourController.prototype, "getUserTours", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Tour updated successfully.',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    (0, swagger_1.ApiBody)({ type: [update_tour_dto_1.UpdateTourDto] }),
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tour_dto_1.UpdateTourDto]),
    __metadata("design:returntype", void 0)
], TourController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Tour deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourController.prototype, "remove", null);
TourController = __decorate([
    (0, swagger_1.ApiTags)('tour'),
    (0, common_1.Controller)('tour'),
    (0, serialize_interceptor_1.Serialize)(tour_dto_1.TourDto),
    __metadata("design:paramtypes", [tour_service_1.TourService])
], TourController);
exports.TourController = TourController;
//# sourceMappingURL=tour.controller.js.map
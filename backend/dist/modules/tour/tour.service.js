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
exports.TourService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tour_entity_1 = require("./entities/tour.entity");
let TourService = class TourService {
    constructor(repo) {
        this.repo = repo;
    }
    create(createTourDto) {
        const newTour = this.repo.create(createTourDto);
        return newTour;
    }
    async findAll() {
        const tours = await this.repo.find();
        return tours;
    }
    async findOne(id) {
        const tour = await this.repo.findOne({ where: { id } });
        return tour;
    }
    async update(id, attrs) {
        const tour = await this.findOne(id);
        if (!tour) {
            throw new common_1.NotFoundException(`Tour with id: ${id} was not found `);
        }
        Object.assign(tour, attrs);
        return this.repo.save(tour);
    }
    async remove(id) {
        const tour = await this.findOne(id);
        if (!tour) {
            throw new common_1.NotFoundException(`Tour with id: ${id} was not found `);
        }
        return this.repo.remove(tour);
    }
};
TourService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tour_entity_1.Tour)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TourService);
exports.TourService = TourService;
//# sourceMappingURL=tour.service.js.map
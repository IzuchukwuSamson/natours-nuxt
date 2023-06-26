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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourDto = void 0;
const class_transformer_1 = require("class-transformer");
class TourDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TourDto.prototype, "duration", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "difficulty", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TourDto.prototype, "ratingsAverage", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TourDto.prototype, "ratingsQuantity", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TourDto.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TourDto.prototype, "priceDiscount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "summary", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "imageCover", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TourDto.prototype, "startDates", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "startLocation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TourDto.prototype, "locations", void 0);
exports.TourDto = TourDto;
//# sourceMappingURL=tour.dto.js.map
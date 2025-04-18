"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_router_1 = require("../modules/customer/customer.router");
const bike_router_1 = require("../modules/bike/bike.router");
const service_router_1 = require("../modules/service/service.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_router_1.customerRouter,
    },
    {
        path: "/bikes",
        route: bike_router_1.bikeRouter,
    },
    {
        path: "/services",
        route: service_router_1.serviceRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

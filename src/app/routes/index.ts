import express from "express";
import { customerRouter } from "../modules/customer/customer.router";
import { bikeRouter } from "../modules/bike/bike.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRouter,
  },
  {
    path: "/bikes",
    route: bikeRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

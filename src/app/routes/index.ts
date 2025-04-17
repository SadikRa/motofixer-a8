import express from "express";
import { customerRouter } from "../modules/customer/customer.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

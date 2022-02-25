import { Router } from "express";
import * as client from "./client.controllers";

const router = Router();

router.get("/index", client.index);

router.get("/:id", client.get);

router.post("/store", client.store);

router.delete("/:id", client.remove);

export default router;

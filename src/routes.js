import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
	return response.status(200).json({ message: "Tá funcionando mesmo!!!" });
});

export default routes;

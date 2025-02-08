import { Router, Request, Response, NextFunction } from "express";

class productRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();

  }

  private getAll = (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "All products" });
  };

  private getOne = (req: Request, res: Response, next: NextFunction): void => {
    const productId = req.params.id;
    res.json({ message: `Product with id ${productId}` });
  };

  private initRoutes(): void {
    this.router.get("/", this.getAll);
    this.router.get("/:id", this.getOne);
  }
}

export default new productRouter().router;
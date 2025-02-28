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

  private createOne = (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "Product created" });
  };

  private getOne = (req: Request, res: Response, next: NextFunction): void => {
    const productId = req.params.id;
    res.json({ message: `Product with id ${productId}` });
  };

  private updateOne= (req: Request, res: Response, next: NextFunction): void => {
    const productId = req.params.id;
    res.json({ message: `Product with id ${productId}` });
  };

  private deleteOne= (req: Request, res: Response, next: NextFunction): void => {
    const productId = req.params.id;
    res.json({ message: `Product with id ${productId}` });
  };

  private initRoutes(): void {
    this.router.get("/", this.getAll);
    this.router.get("/:id", this.getOne);
    this.router.post("/", this.createOne);
    this.router.put("/:id", this.updateOne);
    this.router.delete("/:id", this.deleteOne);
  }
}

export default new productRouter().router;
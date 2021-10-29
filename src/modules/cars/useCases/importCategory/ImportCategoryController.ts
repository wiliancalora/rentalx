import { Response, Request } from "express";

class ImportCategoryController {
  constructor(private imporCategoryUseCase: ImportCategoryUseCase) { }

  handle(request: Request, response: Response): Request {
    const { file } = request;

    this.imporCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };

import { Request, Response, NextFunction, Application } from 'express';
import { UserController } from '../controllers/user.controller';

export class Routes {
  public userController: UserController = new UserController()

  public mountRoutes(app: Application): void {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      })
    

      

  }
}
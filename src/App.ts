import * as express from 'express';
import * as morgan from 'morgan';
import { Routes } from './routes/routes';

class App {
  public app: express.Application;
  public router: Routes = new Routes;
  constructor () {
    this.app = express();
    this.config();
    this.router.mountRoutes(this.app);
        
  }
  config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
  }

    
    
}

export default new App().app
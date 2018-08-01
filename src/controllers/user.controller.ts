import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user.model';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {

  public register(req: Request, res: Response) {
    let newContact = new User(req.body);

    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public login(req: Request, res: Response) {
    User.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getUserWithID(req: Request, res: Response) {
    User.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

 

}
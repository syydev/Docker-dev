import express, { Request, Response } from "express";
import { User } from '../models/user';

const router = express.Router();

// Login
router.get('/:id', function (req: Request, res: Response) {
  User.findOne({ 'id': req.params.id }, function (err, notice_dt) {
    if (err) {
      res.send(err);
    }
    else {
      if (notice_dt == null) {
        console.log('Cannot find the user information');
      } else {
        console.log(notice_dt);
      }
    }
  });
});

// Sign Up
router.post('/', function (req: Request, res: Response) {
  User.create(req.body)
    .then(user => {
      console.log(user);
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

router.put('/:id', function (req: Request, res: Response) {

});

router.delete('/:id', function (req: Request, res: Response) {

});

export { router };
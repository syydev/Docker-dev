import express, { Request, Response } from "express";
import moment from 'moment';
import { Item } from '../models/item';

const router = express.Router();

router.get('/', function (req: Request, res: Response) {
  Item.find({}, function (err, result) {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

router.get('/:_id', function (req: Request, res: Response) {
  Item.findById(req.params._id, function (err, result) {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

router.post('/', function (req: Request, res: Response) {
  const creationDate = moment().format('YYYY-MM-DD HH:mm:ss');
  Item.create({ ...req.body.data, creationDate: creationDate })
    .then(item => res.status(200).send(item))
    .catch(err => res.status(500).send(err));
});

router.put('/:_id', function (req: Request, res: Response) {
  const { title, content } = req.body.data;
  Item.updateOne({ _id: req.params._id }, { title: title, content: content }, function (err, result) {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  })
});

router.delete('/:_id', function (req: Request, res: Response) {
  Item.deleteOne({ _id: req.params._id }, function (err) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

export { router };
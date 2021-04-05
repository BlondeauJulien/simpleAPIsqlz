import { Router } from 'express';
const user = require('../controllers/user.controller');
const router = Router();

router.get('/:id', user.getUser);

router.post('/createUser', user.createUser);

router.delete('/delete', user.deleteUser);

router.patch('/update/:id', user.updateUser);

export default router;
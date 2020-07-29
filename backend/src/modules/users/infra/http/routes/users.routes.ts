import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(err.statusCode).json({ message: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const usersRepository = new UsersRepository();
    const {
      user: { id },
      file,
    } = request;

    const updateAvatar = new UpdateUserAvatarService(usersRepository);

    const user = await updateAvatar.execute({
      user_id: id,
      avatarFileName: file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;

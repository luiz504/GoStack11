import path from 'path';
import fs from 'fs';

import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';

import User from '../infra/typeorm/entities/User';
import IUSersRepository from '../repositories/IUsersRespository';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}
class UpdateUserAvatarService {
  constructor(private usersRepository: IUSersRepository) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      // normalize file path
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      // check if it's exist in directory
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await this.usersRepository.save(user);

    return user;
  }
}
export default UpdateUserAvatarService;

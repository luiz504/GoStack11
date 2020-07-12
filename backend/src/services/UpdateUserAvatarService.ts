import { getRepository } from "typeorm";
import path from "path";
import fs from "fs";

import User from "../models/User";
import uploadConfig from "../config/upload";

interface Request {
  user_id: string;
  avatarFileName: string;
}
class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new Error("Only authenticated users can change avatar.");
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

    await usersRepository.save(user);

    return user;
  }
}
export default UpdateUserAvatarService;

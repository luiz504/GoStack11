import { getRepository } from "typeorm";
import { compare } from "bcryptjs";

import User from "../models/User";

interface Request {
  email: string;
  password: string;
}
interface Respose {
  user: User;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Respose> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error("Incorrect Email/Password combination");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect Email/Password combination");
    }

    return { user };
  }
}
export default AuthenticateUserService;

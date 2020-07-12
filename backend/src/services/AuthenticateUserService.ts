import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import User from "../models/User";

interface Request {
  email: string;
  password: string;
}
interface Respose {
  user: User;
  token: string;
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

    const token = sign({}, "af5597c29467a96523a70787c319f4db", {
      subject: user.id,
      expiresIn: "1d",
    });

    return { user, token };
  }
}
export default AuthenticateUserService;

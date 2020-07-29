import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import auth from '@config/auth';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUSersRepository from '../repositories/IUsersRespository';

interface IRequest {
  email: string;
  password: string;
}
interface IRespose {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUSersRepository) {}

  public async execute({ email, password }: IRequest): Promise<IRespose> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect Email/Password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect Email/Password combination', 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}
export default AuthenticateUserService;

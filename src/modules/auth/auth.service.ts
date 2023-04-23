import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './entities/auth.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { JWT_SECRET } from 'src/config/constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>,
    private readonly configSvc: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    const auth = await this.authModel.findOne({ user: dto.user });
    if (!auth) throw new BadRequestException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, auth.password);
    if (!valid) throw new BadRequestException('Invalid credentials');
    const { _id: id, __v, password, ...rest } = auth;
    const token = await jwt.sign(
      {
        id,
        ...rest,
        expendend: Date.now(),
        expriresIn: '1h',
        expire: Date.now() + 1000 * 60 * 60,
      },
      this.configSvc.get(JWT_SECRET),
    );

    return {
      token,
      user: auth.user,
    };
  }

  async register(dto: RegisterDto) {
    const {password, ...rest} = dto;
    const pass = await bcrypt.hash(password, 10);
    const auth = new this.authModel({
      ...rest,
      password: pass,
    });
    return auth.save();
  }
}

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
    const auth = await this.authModel.findOne({ username: dto.username });
    if (!auth) throw new BadRequestException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, auth.password);
    if (!valid) throw new BadRequestException('Invalid credentials');
    const { _id: id, username, name, lastname, email, roles } = auth;
    const jsonwebtoken = {
      id,
      name,
      lastname,
      username,
      email,
      roles,
      expendend: Date.now(),
      expriresIn: '1h',
      expire: Date.now() + 1000 * 60 * 60,
    };
    const token = await jwt.sign(jwt, this.configSvc.get(JWT_SECRET));

    return {
      token,
      ...jsonwebtoken,
    };
  }

  async register(dto: RegisterDto) {
    const { password, ...rest } = dto;
    const pass = await bcrypt.hash(password, 10);
    const auth = new this.authModel({
      ...rest,
      password: pass,
    });
    return auth.save();
  }
}

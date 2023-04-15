/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
// import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class OauthGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //   const req = context.switchToHttp().getRequest();
    //   try {
    //     if (!req.headers.authorization) {
    //       throw new UnauthorizedException('No se encontro el token');
    //     }
    //     const [, accessToken] = req.headers.authorization.split(' ');
    //     return await this.authSvc.checkUser(accessToken);
    //   } catch (error) {
    //     throw new UnauthorizedException(error.message);
    //   }
    return true;
  }
}

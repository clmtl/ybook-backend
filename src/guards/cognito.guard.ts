import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { Observable } from 'rxjs';

//To use this guard add @UseGuards(AccessTokenGuard, AdminGuard) to your controller
@Injectable()
export class CognitoGuard implements CanActivate {
  verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.USER_POOL_ID,
    tokenUse: 'id',
    clientId: process.env.CLIENT_ID,
  });

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.checkToken(request.headers.authorization);
  }

  async checkToken(token: string) {
    await this.verifier
      .verify(
        token, // the JWT as string
      )
      .then((payload) => {
        return true;
      })
      .catch((err) => {
        throw new UnauthorizedException();
      });
    return false;
  }
}

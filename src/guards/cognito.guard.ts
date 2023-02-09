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

  async canActivate(
    context: ExecutionContext,
  ) {
    try{
      const request = context.switchToHttp().getRequest();
      const decodeToken = await this.checkToken(request.headers.authorization);
      request.user = decodeToken;
      return true;
    } catch(error){
      console.log('error:', error)
      return error;
    }

  }

  async checkToken(token: string) {
    return await this.verifier
      .verify(
        token, // the JWT as string
      );
  }
}

import {ConflictException, HttpException,HttpStatus,Injectable, InternalServerErrorException,Logger, NotFoundException,UnauthorizedException} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
/**
 * To
 */
@Injectable()
export class UserService {
  static register: any;
  /**
   *
   * @param userRepo
   * @param jwtService
   */
  constructor(private userRepo: UserRepository,private jwtService: JwtService) {}
  /**
   *
   */
  logger = new Logger(UserService.name);

  /**
   * To register the user
   * @param user - UserDTO
   * @returns - successful or failure message
   */
  async registerUser(user: UserDTO): Promise<string> {
    try {
      const { password } = user;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const response = await this.userRepo.save({
        ...user,
        password: hashedPassword,
      });
      if (response) {
        const message = `user registerd successfully with id ${response.id}`;
        this.logger.log(message);
        return message;
      } else {
        throw new InternalServerErrorException('user already exists');
      }
    } catch (err) {
      this.logger.error(err.message);
      if (err.errno === 1062) {
        throw new ConflictException(`User already exists`);
      }
      throw new HttpException('user already exist', HttpStatus.NOT_ACCEPTABLE);
    }
  }
  /**
   * To login the registered user
   * @param userLogin - LoginDTO
   * @returns - token
   */
  async loginUser(userLogin: LoginDTO): Promise<{ token }> {
    try {
      const userInfo = await this.userRepo.findOneOrFail({
        emailId: userLogin.emailId
      });
      if (userInfo &&(await bcrypt.compare(userLogin.password, userInfo.password))) {
        const payload: JwtPayload = { emailId: userInfo.emailId };
        const token = this.jwtService.sign(payload);
        this.logger.log('user logged in successfully');
        return { token };
      } else {
        throw new UnauthorizedException(`Invalid credentials`);
      }
    } catch (error) {
      this.logger.error(error.message);
      if (error?.status === 401) {
        throw new UnauthorizedException(`Invalid Credentials`);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
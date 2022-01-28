import {Body,Controller,HttpStatus,Post} from '@nestjs/common';
import {ApiBearerAuth,ApiBody,ApiCreatedResponse,ApiInternalServerErrorResponse,ApiOkResponse,ApiTags,} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';
@ApiBearerAuth('swagger')
@ApiTags('user')
@Controller('users')
export class UserController {
  /**
   * To create instnce using DI
   * @param UserService UserService
   */
  constructor(private userService: UserService) {}
  /**
   * To register the user
   * @param user - UserDTO
   * @returns - Success or failure message
   */
  @ApiCreatedResponse({description: 'User registered successfully  ',status: HttpStatus.CREATED})
  @ApiInternalServerErrorResponse({description: 'Failed to register user',status: HttpStatus.INTERNAL_SERVER_ERROR})
  @ApiBody({ description: 'UserDTO', required: true, type: UserDTO })
  @Post('/register')
  registerUser(@Body() user: UserDTO): Promise<string> {
    return this.userService.registerUser(user);
  }
  /**
   * To login the registered user
   * @param userLogin - LoginDTO
   * @returns -  token
   */
  @ApiOkResponse({description: 'User logged in successfully  ',status: HttpStatus.OK})
  @ApiInternalServerErrorResponse({description: 'Failed to login the user',status: HttpStatus.INTERNAL_SERVER_ERROR})
  @Post('/login')
  userLogin(@Body() userLogin: LoginDTO): Promise<{ token }> {
    return this.userService.loginUser(userLogin);
  }
}
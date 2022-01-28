import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const mockUserService = () => ({
    register: jest.fn(),
    login: jest.fn(),
    
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: UserRepository,
          useFactory: mockUserService,
        },],
    }).compile();

    service = module.get<UserService>(UserService);
  });
  describe('register', () => {
    it('should register in the database', async () => {
      UserService.register.mockResolvedValue('message');
      expect(UserService.register).not.toHaveBeenCalled();
      const register = {
        name: 'sample name',
        emailId: 'mailid@gmail.com',
        password: 'password',
        phoneNumber:'mobile number',
        age:'33'
      };
      const result = await UserService.register(UserDTO);
      expect(UserRepository.register).toHaveBeenCalledWith(
        UserDTO,
      );
      expect(result).toEqual('someProduct');
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();

  });
});

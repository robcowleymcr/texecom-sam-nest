import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dogs from './dogs';
import { BadRequestException } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService)
  });

  describe('findAll', () => {
    it('should return the correct data', () => {
      const expected = dogs;
      jest.spyOn(appService, 'findAll').mockImplementation(() => dogs)

      expect(appController.findAll()).toBe(expected);
    });


    it('should call the service with the correct data', () => {
      const params = {
        limit: 5
      }
      const mockService = jest.spyOn(appService, 'findAll')

      appController.findAll(params)

      expect(mockService).toHaveBeenCalledWith(params)
    });
  });

  describe('findOne', () => {
    it('should return the correct data', () => {
      const id = '4ddbe251-72af-495e-8e9d-869217e1d92a'
      const expected = dogs[1];

      jest.spyOn(appService, 'findOne').mockImplementation(() => expected)

      expect(appController.findById({ id })).toBe(expected);
    });

    it('should call the service with the correct data', () => {
      const params = {
        id: '4ddbe251-72af-495e-8e9d-869217e1d92a'
      }
      const mockService = jest.spyOn(appService, 'findOne')

      appController.findById(params)

      expect(mockService).toHaveBeenCalledWith(params.id)
    });
  });
});

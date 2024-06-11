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
      controllers: [],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService)
  });

  describe('findAll', () => {
    it('should return the full array if no limit param is given', () => {
      const params = {}
      const expected = dogs;

      // @ts-expect-error testing wrong argument type
      expect(appService.findAll(params)).toBe(expected);
    });

    it('should return a reduced array if limit param is given', () => {
      const limit = 3;

      expect(appService.findAll({ limit }).length).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should return the correct data if a valid id is given', () => {
      const id = '4ddbe251-72af-495e-8e9d-869217e1d92a'
      const expected = dogs[1];

      expect(appService.findOne(id)).toBe(expected);
    });

    it('should thrown an exception if in an invalid id is given', () => {
      const id = 'abc'

      expect(() => {
        appService.findOne(id)
      }).toThrow(BadRequestException);
    });
  });
});

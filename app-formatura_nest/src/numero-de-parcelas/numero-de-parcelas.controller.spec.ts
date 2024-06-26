import { Test, TestingModule } from '@nestjs/testing';
import { NumeroDeParcelasController } from './numero-de-parcelas.controller';
import { NumeroDeParcelasService } from './numero-de-parcelas.service';

describe('NumeroDeParcelasController', () => {
  let controller: NumeroDeParcelasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeroDeParcelasController],
      providers: [NumeroDeParcelasService],
    }).compile();

    controller = module.get<NumeroDeParcelasController>(NumeroDeParcelasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NumeroDeParcelasService } from './numero-de-parcelas.service';

describe('NumeroDeParcelasService', () => {
  let service: NumeroDeParcelasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumeroDeParcelasService],
    }).compile();

    service = module.get<NumeroDeParcelasService>(NumeroDeParcelasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

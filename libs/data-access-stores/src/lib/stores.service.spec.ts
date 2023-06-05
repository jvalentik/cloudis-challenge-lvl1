import { StoreService } from './store.service';
import { Test } from '@nestjs/testing';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StoreService],
    }).compile();

    service = module.get(StoreService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

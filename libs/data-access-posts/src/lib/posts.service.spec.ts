import { PostService } from './posts.service';
import { Test } from '@nestjs/testing';

describe('PostsService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = module.get(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

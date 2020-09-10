import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService} from './items.service'

describe('Items Controller', () => {
  let controller: ItemsController;
  let service : ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers:[ItemsService],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  describe('findAll', () => {
    it('should return an array of items', async () => {
      const result : any = ['test'];
      jest.spyOn(ItemsService, 'findAll').mockImplementation(() => result);

      expect(await ItemsController.findAll()).toBe(result);
    });
  });
});

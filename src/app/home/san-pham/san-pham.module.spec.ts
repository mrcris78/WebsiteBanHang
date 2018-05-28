import { SanPhamModule } from './san-pham.module';

describe('SanPhamModule', () => {
  let sanPhamModule: SanPhamModule;

  beforeEach(() => {
    sanPhamModule = new SanPhamModule();
  });

  it('should create an instance', () => {
    expect(sanPhamModule).toBeTruthy();
  });
});

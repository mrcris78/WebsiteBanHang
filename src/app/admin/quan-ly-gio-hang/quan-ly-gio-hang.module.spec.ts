import { QuanLyGioHangModule } from './quan-ly-gio-hang.module';

describe('QuanLyGioHangModule', () => {
  let quanLyGioHangModule: QuanLyGioHangModule;

  beforeEach(() => {
    quanLyGioHangModule = new QuanLyGioHangModule();
  });

  it('should create an instance', () => {
    expect(quanLyGioHangModule).toBeTruthy();
  });
});

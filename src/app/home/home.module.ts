import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChiTietSanPhamComponent } from './trang-chi-tiet-san-pham/trang-chi-tiet-san-pham.component';
import { TrangGioHangComponent } from './trang-gio-hang/trang-gio-hang.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrangChuComponent, TrangChiTietSanPhamComponent, TrangGioHangComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChiTietSanPhamComponent } from './trang-chi-tiet-san-pham/trang-chi-tiet-san-pham.component';
import { TrangGioHangComponent } from './trang-gio-hang/trang-gio-hang.component';
import { Routes, Router, RouterModule } from '@angular/router';


const homeRouting: Routes = [
  {path:'',component:TrangChuComponent}
  
  ];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homeRouting)
  ],
  declarations: [TrangChuComponent, TrangChiTietSanPhamComponent, TrangGioHangComponent]
})
export class HomeModule { }

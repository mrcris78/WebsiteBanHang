import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangGioHangComponent } from './trang-gio-hang.component';

describe('TrangGioHangComponent', () => {
  let component: TrangGioHangComponent;
  let fixture: ComponentFixture<TrangGioHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangGioHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangGioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

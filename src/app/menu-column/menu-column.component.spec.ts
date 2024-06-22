import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuColumnComponent } from './menu-column.component';

describe('MenuColumnComponent', () => {
  let component: MenuColumnComponent;
  let fixture: ComponentFixture<MenuColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

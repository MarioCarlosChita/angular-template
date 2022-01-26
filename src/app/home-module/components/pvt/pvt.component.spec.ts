import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtComponent } from './pvt.component';

describe('PvtComponent', () => {
  let component: PvtComponent;
  let fixture: ComponentFixture<PvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

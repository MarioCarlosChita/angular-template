import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HptComponent } from './hpt.component';

describe('HptComponent', () => {
  let component: HptComponent;
  let fixture: ComponentFixture<HptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

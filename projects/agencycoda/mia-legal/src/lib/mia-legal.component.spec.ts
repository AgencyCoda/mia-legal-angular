import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaLegalComponent } from './mia-legal.component';

describe('MiaLegalComponent', () => {
  let component: MiaLegalComponent;
  let fixture: ComponentFixture<MiaLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

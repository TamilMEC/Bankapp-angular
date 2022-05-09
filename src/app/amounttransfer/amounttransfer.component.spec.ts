import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmounttransferComponent } from './amounttransfer.component';

describe('AmounttransferComponent', () => {
  let component: AmounttransferComponent;
  let fixture: ComponentFixture<AmounttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmounttransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmounttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

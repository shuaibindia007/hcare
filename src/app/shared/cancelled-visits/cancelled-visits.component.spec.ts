import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledVisitsComponent } from './cancelled-visits.component';

describe('CancelledVisitsComponent', () => {
  let component: CancelledVisitsComponent;
  let fixture: ComponentFixture<CancelledVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

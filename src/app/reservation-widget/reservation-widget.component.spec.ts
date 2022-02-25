import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsWidgetComponent } from './reservations-widget.component';

describe('ReservationsWidgetComponent', () => {
  let component: ReservationsWidgetComponent;
  let fixture: ComponentFixture<ReservationsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

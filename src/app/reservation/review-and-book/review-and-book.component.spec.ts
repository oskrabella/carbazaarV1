import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndBookComponent } from './review-and-book.component';

describe('ReviewAndBookComponent', () => {
  let component: ReviewAndBookComponent;
  let fixture: ComponentFixture<ReviewAndBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAndBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

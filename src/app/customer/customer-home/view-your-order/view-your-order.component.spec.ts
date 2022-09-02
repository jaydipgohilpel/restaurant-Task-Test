import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYourOrderComponent } from './view-your-order.component';

describe('ViewYourOrderComponent', () => {
  let component: ViewYourOrderComponent;
  let fixture: ComponentFixture<ViewYourOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewYourOrderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewYourOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

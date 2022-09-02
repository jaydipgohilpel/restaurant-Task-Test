import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateyourorderComponent } from './create-your-order.component';

describe('CreateyourorderComponent', () => {
  let component: CreateyourorderComponent;
  let fixture: ComponentFixture<CreateyourorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateyourorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateyourorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupApptComponent } from './setup-appt.component';

describe('SetupApptComponent', () => {
  let component: SetupApptComponent;
  let fixture: ComponentFixture<SetupApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

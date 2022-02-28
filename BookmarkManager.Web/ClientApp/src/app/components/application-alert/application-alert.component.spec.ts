import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAlertComponent } from './application-alert.component';

describe('ApplicationAlertComponent', () => {
  let component: ApplicationAlertComponent;
  let fixture: ComponentFixture<ApplicationAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

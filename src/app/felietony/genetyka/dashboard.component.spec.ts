import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetykaDashboardComponent } from './dashboard.component';

describe('GenetykaDashboardComponent', () => {
  let component: GenetykaDashboardComponent;
  let fixture: ComponentFixture<GenetykaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenetykaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenetykaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiewiedzaDashboardComponent } from './dashboard.component';

describe('NiewiedzaDashboardComponent', () => {
  let component: NiewiedzaDashboardComponent;
  let fixture: ComponentFixture<NiewiedzaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiewiedzaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiewiedzaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

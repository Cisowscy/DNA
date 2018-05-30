import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogiaDashboardComponent } from './dashboard.component';

describe('GenealogiaDashboardComponent', () => {
  let component: GenealogiaDashboardComponent;
  let fixture: ComponentFixture<GenealogiaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogiaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogiaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

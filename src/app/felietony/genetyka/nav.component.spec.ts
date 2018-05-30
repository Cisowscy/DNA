import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetykaNavComponent } from './nav.component';

describe('GenetykaNavComponent', () => {
  let component: GenetykaNavComponent;
  let fixture: ComponentFixture<GenetykaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenetykaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenetykaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

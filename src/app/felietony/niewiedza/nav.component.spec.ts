import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiewiedzaNavComponent } from './nav.component';

describe('NiewiedzaNavComponent', () => {
  let component: NiewiedzaNavComponent;
  let fixture: ComponentFixture<NiewiedzaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiewiedzaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiewiedzaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

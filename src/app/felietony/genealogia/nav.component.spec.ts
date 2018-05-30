import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogiaNavComponent } from './nav.component';

describe('GenealogiaNavComponent', () => {
  let component: GenealogiaNavComponent;
  let fixture: ComponentFixture<GenealogiaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogiaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogiaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

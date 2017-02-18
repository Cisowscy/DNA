import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGenComponent } from './match-gen.component';

describe('MatchGenComponent', () => {
  let component: MatchGenComponent;
  let fixture: ComponentFixture<MatchGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

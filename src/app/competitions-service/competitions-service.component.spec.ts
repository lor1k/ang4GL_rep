import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsServiceComponent } from './competitions-service.component';

describe('CompetitionsServiceComponent', () => {
  let component: CompetitionsServiceComponent;
  let fixture: ComponentFixture<CompetitionsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

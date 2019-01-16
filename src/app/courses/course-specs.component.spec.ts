import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSpecsComponent } from './course-specs.component';

describe('CourseSpecsComponent', () => {
  let component: CourseSpecsComponent;
  let fixture: ComponentFixture<CourseSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

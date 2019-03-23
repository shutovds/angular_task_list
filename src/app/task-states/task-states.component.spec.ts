import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatesComponent } from './task-states.component';

describe('TaskStatesComponent', () => {
  let component: TaskStatesComponent;
  let fixture: ComponentFixture<TaskStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

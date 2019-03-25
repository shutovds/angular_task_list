import { Component, OnInit, DoCheck } from '@angular/core';
import { Task } from '../task';

import { TaskService } from '../task.service';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

  tasks: Task[];
  planned = 2;
  inProgress = 2;
  completed =  2;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck() {
    // TODO: rewrite
    this.calculate();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
      }

  add(name: string, description: string,
      estimate: string, state: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask(
      { name, description, estimate, state } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  calculate() {
    // TODO: rewrite
    // add for loop to process arry of states
    // and return arry of hours
    // add calculation tasks numbers
    let planned = 0;
    let inProgress = 0;
    let completed = 0;
    for (const task of this.tasks) {
      if (task.state === 'Planned') {
        planned = planned + (+task.estimate);
      }
      if (task.state === 'In progress') {
        inProgress = inProgress + (+task.estimate);
      }
      if (task.state === 'Completed') {
        completed = completed + (+task.estimate);
      }
    }
    this.planned = planned;
    this.inProgress = inProgress;
    this.completed =  completed;
  }
}


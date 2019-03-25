import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, name: 'Task 1', description: 'description 1', estimate: '12', state: 'Planned' },
      { id: 12, name: 'Task 2', description: 'description 2', estimate: '122', state: 'In progress' },
      { id: 13, name: 'Task 3', description: 'description 3', estimate: '52', state: 'Completed' },
      { id: 14, name: 'Task 4', description: 'description 4', estimate: '16', state: 'Planned' },
      { id: 15, name: 'Task 5', description: 'description 5', estimate: '3', state: 'In progress' },
      { id: 20, name: 'Task 6', description: 'description 10', estimate: '8', state: 'Planned' }
    ];
    return {tasks};
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}

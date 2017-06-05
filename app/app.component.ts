import { Component } from '@angular/core';

////////Root Component///////(acts as view)
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>TO-DO List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <p *ngFor="let currentTask of tasks">{{currentTask.description}}</p>
    </ul>
  </div>
  `
})

////////Class Declaration///////
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task ("complete angular weekday hmwk"),
    new Task ("add README files to github Repos"),
    new Task ("start thinking about possible group projects")
  ];
}


///////Model Declaration////////
export class Task {
  public done: boolean = false;
  constructor(public description: string) {
  }
}

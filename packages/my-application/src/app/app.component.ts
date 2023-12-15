import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import type { ThingType } from '@my/wrapper'; // re-exported from @my/ui
import { wrapThing } from '@my/wrapper'; // function wrapper that uses ThingType (from @my/ui) as input

const inputToBeWrapped: ThingType = { name: 'thing', id: 1, when: new Date() };

console.log(wrapThing(inputToBeWrapped));

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-application';
}

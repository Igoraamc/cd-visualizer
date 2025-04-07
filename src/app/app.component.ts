import { ChangeDetectionStrategy, Component, DoCheck, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnChanges, DoCheck {
  title = 'cd-visualizer';

  ngOnChanges() {
    console.log('AppComponent changes detected');
  }

  ngDoCheck(): void {
    console.log('AppComponent change detection cycle triggered');
  }
}

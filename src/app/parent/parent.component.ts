import { ChangeDetectionStrategy, Component, DoCheck, OnChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnChanges, DoCheck {
  protected counter = 0;
  protected intervalId: any;

  ngOnChanges() {
    console.log('ParentComponent changes detected');
  }

  ngDoCheck(): void {
    console.log('ParentComponent change detection cycle triggered');
  }

  handleClick() {
    console.log('Button clicked in ParentComponent');
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.counter = 0;
      return;
    }
    this.intervalId = setInterval(() => {
      console.log('Interval running in ParentComponent');
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);
  }
}

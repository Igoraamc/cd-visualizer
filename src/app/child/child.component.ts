import { ChangeDetectionStrategy, Component, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges, DoCheck {
  protected counter = 0;
  protected intervalId: any;

  ngOnChanges() {
    console.log('ChildComponent changes detected');
  }

  ngDoCheck(): void {
    console.log('ChildComponent change detection cycle triggered');
  }

  handleClick() {
    console.log('Button clicked in ChildComponent');
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.counter = 0;
      return;
    }
    this.intervalId = setInterval(() => {
      console.log('Interval running in ChildComponent');
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);
  }
}

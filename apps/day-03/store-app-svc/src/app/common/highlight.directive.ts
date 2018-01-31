import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() highlightColor = 'yellow';

  constructor(private hostElement: ElementRef) {}

  @HostListener('mouseenter')
  onMouseOver() {
    this.setBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor(null);
  }

  ngOnInit() {
    //this.setBackgroundColor(this.highlightColor);
  }

  private setBackgroundColor(color) {
    this.hostElement.nativeElement.style.backgroundColor = color;
  }
}

// Usage:
// <p app-highlight></p>
// <h2 app-highlight></h2>

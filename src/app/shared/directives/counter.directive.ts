import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[nbCounter]' })
export class CounterDirective implements OnInit {
  @Input() end = 100;
  @Input() duration = 900;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const start = 0, t0 = performance.now(), D = this.duration;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / D);
      const val = Math.floor(start + (this.end - start) * p);
      this.el.nativeElement.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

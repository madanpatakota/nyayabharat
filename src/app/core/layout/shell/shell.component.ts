import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({ duration: 600, easing: 'ease-out', once: true, offset: 80 });
  }
}

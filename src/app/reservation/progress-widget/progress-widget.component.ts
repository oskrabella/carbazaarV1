import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss']
})
export class ProgressWidgetComponent implements OnInit {
  @Input() step1progress: string;
  @Input() step2progress: string;
  @Input() step3progress: string;
  @Input() step4progress: string;
  constructor() { }

  ngOnInit(): void {
  }

}

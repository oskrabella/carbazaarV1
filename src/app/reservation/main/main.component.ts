import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private fragment: string;
  step1progress = 'active';
  step2progress = 'inactive';
  step3progress = 'inactive';
  step4progress = 'inactive';

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  onActivate(event: any) {
    console.log("on activate main");
  }

}

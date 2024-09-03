import { Component, OnInit } from '@angular/core';
import {NzFlexModule} from 'ng-zorro-antd/flex';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsComponent } from 'ng-zorro-antd/steps';
import { NzStepComponent } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzFlexModule,CommonModule,NzDividerModule,NzStepsComponent,NzStepComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

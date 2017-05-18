import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  options = [
    { step: 'Attend Class' },
    { step: 'Practice' },
    {
      step: [
        // { step: '' },
        { step: 'Homework' },
        { step: 'Study' }
      ]
    },
    { step: 'Review' },
    { step: 'Test' }
  ];

  dropDownOptions = [];
  stepIndex = 0;
  currentStep = this.options[this.stepIndex];
  showMultipleOptions = false;
  disableBtn = false;

  constuctor() {

  }

  ngOnInit() {

  }

  completeThisStepFromBtn() {
    this.stepIndex++;
    if (this.stepIndex < this.options.length) {
      this.currentStep = this.options[this.stepIndex];
      if (Array.isArray(this.currentStep.step)) {
        this.dropDownOptions = this.currentStep.step;
        this.showMultipleOptions = true;
      } else {
        this.showMultipleOptions = false;

        if (this.stepIndex === this.options.length - 1) {
          this.disableBtn = true;
        }
      }
    }
  }

  completeThisStepFromSelection(step) {
    console.log(step);
    _.remove(this.dropDownOptions, element => {
      return element.step === step;
    });
    if (this.dropDownOptions.length === 0) {
      this.showMultipleOptions = false;
      this.stepIndex++;
      this.currentStep = this.options[this.stepIndex];
    }
  }
}

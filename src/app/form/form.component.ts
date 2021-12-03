import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, CanComponentDeactivate {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    return confirm('Are you sure you want to abandon the unsaved changes?');
  }

}
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray,Validator, Validators } from "@angular/forms";
import { Product } from '../product';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  @Input() product: Product;
  @Output() handleClose = new EventEmitter();
  user: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });
  }

}

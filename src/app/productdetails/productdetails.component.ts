import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() product: Product;
  @Output() handleClose = new EventEmitter();
  @Output() selectionChanged = new EventEmitter();
  @Output() handleUpdate = new EventEmitter<Product>();
  AddProduct: Product;

  constructor() { }

  ngOnInit(): void {}
  ngOnChange(): void{}
  onClose() {
   this.handleClose.emit(true);
  }
  onUpdate() {
    this.handleUpdate.emit(this.product);
  }
  AddNew()
  {
    this.selectionChanged.emit(this.AddProduct);
  }
}

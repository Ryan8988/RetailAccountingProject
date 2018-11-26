import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  orderDetailForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<EditComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    console.log(this.data);
    this.orderDetailForm = this.fb.group({
      itemname: <string>this.data.itemname,
      buyer: <string>this.data.buyer,
      sell: <string>this.data.itemname,
      cost: <string>this.data.itemname,
      profit: <string>this.data.itemname,
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const updateOrder = this.orderDetailForm.value as Order;
    this.dialogRef.close(updateOrder);
  }
}

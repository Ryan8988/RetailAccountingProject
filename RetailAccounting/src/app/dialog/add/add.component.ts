import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  orderDetailForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.orderDetailForm = this.fb.group({
      itemname: new FormControl(),
      buyer: new FormControl(),
      sell: new FormControl(),
      cost: new FormControl(),
      profit: new FormControl(),
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const insetorder = this.orderDetailForm.value as Order;
    this.dialogRef.close(insetorder);
  }

}

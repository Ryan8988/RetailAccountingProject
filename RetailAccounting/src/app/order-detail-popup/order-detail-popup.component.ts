import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-detail-popup',
  templateUrl: './order-detail-popup.component.html',
  styleUrls: ['./order-detail-popup.component.css']
})
export class OrderDetailPopupComponent implements OnInit {

  orderDetailForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<OrderDetailPopupComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.orderDetailForm = this.fb.group({
      buyer: 'Ryan',
    });
  }

  close() {
    this.dialogRef.close();
  }

}

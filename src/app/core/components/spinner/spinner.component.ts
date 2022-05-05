import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-spinner',
  template: '<ngx-spinner type="ball-scale-multiple"></ngx-spinner>',
  styleUrls: []
})
export class SpinnerComponent implements OnInit {

  @Input() showLoader!: boolean;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void{
    this.showLoader ? this.spinner.show() : this.spinner.hide();
  }

}

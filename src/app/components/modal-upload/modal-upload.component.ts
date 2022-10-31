import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(){
    this.modal.close();
  }

}

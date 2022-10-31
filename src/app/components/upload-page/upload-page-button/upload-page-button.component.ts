import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUploadComponent } from '../../modal-upload/modal-upload.component';

@Component({
  selector: 'app-upload-page-button',
  templateUrl: './upload-page-button.component.html',
  styleUrls: ['./upload-page-button.component.scss']
})
export class UploadPageButtonComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalUpload(){
    this.modalService.open(ModalUploadComponent);
  }

}

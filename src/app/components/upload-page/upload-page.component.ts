import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
class imageSnippet{
  constructor(public src: string, public file: File){}
}
@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  constructor(private postService:PostService) { }

  selectedFile?:any;
  capturedFile?:any;

  ngOnInit(): void {
  }


  async captureFile(event:any) {
   this.capturedFile = event.target.files[0];
    console.log(this.capturedFile);
    await this.processFile(this.captureFile);
    console.log('hola');
    console.log(this.selectedFile + 'xdddewda');
}

  async processFile(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    console.log('algo');

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new imageSnippet(event.target.result, file);
      let randomId = this.randomID(15);
      let randomId2 = this.randomID(15);
      let postImg = { id: randomId2, url: this.selectedFile.src };

      let newPost = {id:randomId, userId:'1',  postImg:postImg, tags:['perro', 'gato']};
      this.postService.createPost(newPost).subscribe(() => console.log('bien'));

      });
      reader.readAsDataURL(file);
  }

  randomID(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {

  public imageSrc: string | ArrayBuffer | null;

  public handleFileUpload(file: any) {

  }

  public handleFilePreview(event: any) {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imageSrc = reader.result;
    }
  }

}

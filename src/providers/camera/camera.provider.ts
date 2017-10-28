import { Injectable } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@Injectable()
export class CameraProvider {
  picture: any;

  constructor(
    private cameraPreview: CameraPreview) 
  { 
  }
  
  cameraOptions() {
     const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1
    };
  }  

  pictureOptions() {
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }
  }
/*
  startCamera() {
    this.cameraPreview.startCamera(this.cameraOptions)
    .then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
  }

  setHandler() {
    this.cameraPreview.setOnPictureTakenHandler()
    .subscribe((result) => {
      console.log(result);
    });
  }
  
  takePicture() {
    this.cameraPreview.takePicture(this.pictureOptions)
    .then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }
    */
  switchCamera() {
    this.cameraPreview.switchCamera();
  }
   
  negativeCamera() {
    this.cameraPreview.setColorEffect('negative');
  }
    
  stopCamera(){
    this.cameraPreview.stopCamera();
  }
  
}

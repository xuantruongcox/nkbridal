import { Location } from '@angular/common';
import { AwsServiceService } from './../../services/aws-service.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import * as AWS from 'aws-sdk';
import { UploadProducts } from 'src/app/collections/info-property';
import { Observable } from 'rxjs';
// ========
// ================
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  info = new UploadProducts;
  getLinkImage;
  disable = false;
  options = [
    "Formal",
    "Wedding",
    "Bridesmaid",
    "Special-offers",
    "RPRS"
  ];
  optionSelected;
  constructor(public service: ApiServiceService, public awsService: AwsServiceService) {

  }

  ngOnInit() {
  }
  /* Upload METHOD */

  uploadImage(albumName, info) {
    alert("Waiting...");
    this.disable = true;
    /* Config s3*/

    /* /.Config s3 */
    let fileInput = (<HTMLInputElement>document.getElementById("product-image"));
    let fileInputSingle = (<HTMLInputElement>document.getElementById("single-image"));
    let singleFile = fileInputSingle.files[0];
    let files = fileInput.files

    // s3 upload singlefile
    if (albumName && info) {
      this.service.getSetting()
        .subscribe(res => {
          let pool = res[0].value;
          pool = res[0].value;
          AWS.config.region = 'ap-southeast-2'
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: pool,
          })
          let s3 = new AWS.S3({
            apiVersion: '2006-03-01'
          });
          // start upload
          let params = {
            Bucket: 'nkbridal-data' + `/${albumName}-Album`,
            Key: singleFile.name,
            Body: singleFile,
            ACL: 'public-read',
          }
          if (this.optionSelected == null) {
            alert("Please Choose Category")
            return false;
          } else {
            s3.upload(params, (err, data) => {
              if (err) {
                alert(err)
              } else {
                setTimeout(() => {
                  info.image = data.Location
                  info.s3_image = singleFile.name;
                  this.service.addProducts(info)
                    .subscribe(res => {
                      let id = res.insertId
                      this.awsService.uploadFile(albumName, files, id)
                    }, err, () => {
                      setTimeout(() => {
                        alert("Completed.!!!");
                        info = [
                          info.name = null,
                          info.price = null,
                          info.content = null,
                          fileInput.value = "",
                          fileInputSingle.value = "",
                          info.category = null,
                        ];
                        this.disable = false;
                      }, 1000)
                    })
                }, 100)
              }
            })
          }
        })
    }else{
      alert("Please insert into form");
      this.disable = false;
    }


  }
}


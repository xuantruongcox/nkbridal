import { Location } from '@angular/common';
import { AwsServiceService } from './../../services/aws-service.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import * as AWS from 'aws-sdk';
import { UploadProducts } from 'src/app/collections/info-property';
import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
// ========
// ================
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  editInfo = {
    "name": "",
    "s3_image": "",
    "image": "",
    "price": "",
    "content": "",
    "category": ""
  };
  info = new UploadProducts;
  getLinkImage;
  disable = false;
  snapshotId;
  options = [
    "Formal",
    "Wedding",
    "Bridesmaid",
    "Special-offers",
    "RPRS"
  ];
  optionSelected;
  constructor(private route: ActivatedRoute, public service: ApiServiceService, public awsService: AwsServiceService) {

  }

  ngOnInit() {
    this.snapshotId = this.route.snapshot.paramMap.get("id")

    // GetInfo
    if (this.snapshotId !== null) {
      this.service.getInfoFromId(this.snapshotId)
        .subscribe(res => {
          this.editInfo = res[0]
        })
    }
  }
  /* Upload METHOD */

  edit(albumName, info) {
    /* alert("Waiting...");
    this.disable = true; */
    /* Config s3*/

    /* /.Config s3 */
    let fileInput = (<HTMLInputElement>document.getElementById("product-image"));
    let fileInputSingle = (<HTMLInputElement>document.getElementById("single-image"));
    let singleFile = fileInputSingle.files[0];
    let files = fileInput.files

    // s3 upload singlefile


    /* DELETE IMAGE BEFORE UPDATE */
    if (singleFile) {
      this.service.getInfoFromId(this.snapshotId)
        .subscribe(res => {
          this.awsService.deleteFile(res[0].category, res[0].s3_image)
        })
    }
    if (files.length !== 0) {
      this.service.getThumb(this.snapshotId)
        .subscribe(res => {
          for (let i = 0; i < res.length; i++) {
            this.awsService.deleteFile(albumName, res[i].s3_image)
            console.log(res[i].s3_image)
          }
          setTimeout(() => {
            this.service.deleteThumbnail(this.snapshotId)
              .subscribe(res => {
                console.log(res)
              })
          }, 700)
        })
    }
    /* /.DELTE IMAGE BEFORE UPDATE */
    /* UPDATE */
    if (singleFile || files.length !== 0) {
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
          // start update

          if (this.optionSelected == null) {
            alert("Please Choose Category")
            return false;
          } else {
            if (singleFile) {
              let params = {
                Bucket: 'nkbridal-data' + `/${albumName}-Album`,
                Key: singleFile.name,
                Body: singleFile,
                ACL: 'public-read',
              }
              s3.upload(params, (err, data) => {
                if (err) {
                  alert(err)
                } else {
                  setTimeout(() => {
                    info.image = data.Location
                    info.s3_image = singleFile.name;
                    info.id = this.snapshotId
                    this.service.editProduct(info)
                      .subscribe(res => {
                        this.awsService.uploadFile(albumName, files, this.snapshotId)
                        console.log(res)
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
                        }, 100)
                      })
                  }, 100)
                }
              })
            }
            if (files.length !== 0) {
              this.awsService.uploadFile(albumName, files, this.snapshotId)
              info.id = this.snapshotId
              this.disable = true
              this.service.editProduct(info)
                .subscribe(res => {

                  console.log(res)
                }, null, () => {
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
                  }, 100)
                })

            }
          }
        })
    } else {
      info.id = this.snapshotId
      this.disable = true
      this.service.editProduct(info)
        .subscribe(res => {
          console.log(res)
        }, null, () => {
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
          }, 100)
        })
    }

    /* /.UPDATE */
  }

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
                      }, 100)
                    })
                }, 100)
              }
            })
          }
        })
    } else {
      alert("Please insert into form");
      this.disable = false;
    }


  }
}


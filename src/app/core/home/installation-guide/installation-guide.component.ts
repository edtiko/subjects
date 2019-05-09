import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shw-installation-guide',
  templateUrl: './installation-guide.component.html',
  styleUrls: ['./installation-guide.component.scss']
})
export class InstallationGuideComponent implements OnInit {
  externalDependenciesInstallationCommands =
`npm i @angular/common @angular/core @angular/animations @angular/cdk
npm i bootstrap
npm i primeicons
npm i file-saver
npm i xlsx
npm i primeng`;

  stylesInAngularJson =
`"styles": [
  "node_modules/@angular/cdk/overlay-prebuilt.css",
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/bootstrap/scss/bootstrap.scss",
  ...
]`;

  constructor() { }

  ngOnInit() {
  }

}

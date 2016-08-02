import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../../pages/detail/detail';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }
showDetail(){
  this.navController.setPages([
    {page: HomePage},
    {page: DetailPage}
  ], {
    animate: true,
    direction: 'forward'
  });
}
}

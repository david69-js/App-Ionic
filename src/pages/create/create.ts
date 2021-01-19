import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiLaravelServicesProvider } from "../../providers/api-laravel-services/api-laravel-services";
import { Task } from "../../models/task";
import { HomePage } from "../home/home";

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  public task:Task;
  public created;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public Provider: ApiLaravelServicesProvider) {
    this.task = new Task(null ,'','',false);
  } 

  saveTask(task){
    console.log(task);
    this.Provider.create(this.task).subscribe(
      response => { 
        if(response){
          this.created = response;
          this.task = new Task(null,'','', false);
  
          console.log('Created successfully');
          console.log(this.created);
        }

      },
      error =>{
        console.log(<any>error);
      })
  }
  home(){
    this.navCtrl.setRoot(HomePage);
  }

}

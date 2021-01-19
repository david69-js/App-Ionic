import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiLaravelServicesProvider } from "../../providers/api-laravel-services/api-laravel-services";
import { Task } from "../../models/task";
import { HomePage } from "../home/home";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage implements OnInit{
public id;
public taskid:Task;
public update;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Provider:ApiLaravelServicesProvider) {
    this.id = navParams.get('id');
    this.taskid = new Task(null ,'','',false);
  
  }

  ngOnInit(){
    console.log(this.id);

    this.Provider.getTask(this.id).subscribe(response =>{
      this.taskid = response;
      console.log(this.taskid)
    },
    error =>{
      console.log(<any>error);
    });



  }

  updateTask(task){
    console.log(task);
    this.Provider.update(this.id, this.taskid).subscribe(
      response => { 
        if(response){
          this.update = response;
            console.log('Updated successfully');
            console.log(this.update);
            this.navCtrl.setRoot(HomePage);
        }
      },
      error =>{
        console.log(<any>error);
      })
  }
}

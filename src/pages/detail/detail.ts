import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiLaravelServicesProvider } from '../../providers/api-laravel-services/api-laravel-services'; 
import { Task } from '../../models/task';
import { HomePage } from '../home/home';
import { EditPage } from "../edit/edit";
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"detail",
  segment:"detail/"
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  public id: string;
  public task:Task;
  public deleteTask;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Provider:ApiLaravelServicesProvider) {

    this.id = navParams.get('id');
  }

  ngOnInit(){
    this.Provider.getTask(this.id).subscribe(response =>{
      this.task = response;
    }, 
    error =>{
      console.log(<any>error);
    });
  }

  delete(task){
    
    this.Provider.deleteTask(task.id).subscribe(
      response =>{
        this.delete = response;
        if(this.delete){
          console.log(this.delete);
          alert('Task delete success');
          this.navCtrl.push(HomePage);
        }
    },
    error =>{
      console.log(<any>error);
    });
  }
  
  redirec(){
    this.navCtrl.push(EditPage,{id: this.id});
  }
}

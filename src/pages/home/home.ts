import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiLaravelServicesProvider } from '../../providers/api-laravel-services/api-laravel-services';
import { DetailPage } from '../detail/detail';
import { CreatePage } from '../create/create'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiLaravelServicesProvider]
})
export class HomePage implements OnInit {
  public tasks;
  public update;
    constructor(
      public navCtrl: NavController, public Provider: ApiLaravelServicesProvider) { 

       
      }
      //Show all tasks
      ngOnInit(){
       
        this.Provider.getAllTasks().subscribe(task =>{
          this.tasks = task;
        }, 
        error =>{
            console.log(<any>error);
        });
      }

      detail(task){
       this.navCtrl.push(DetailPage, {id: task.id});
      }

      redirect(){
        this.navCtrl.setRoot(CreatePage);
      }

      status(task){
        if(task.status == false){
          task.status = true;
          this.Provider.update(task.id, task).subscribe(
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
            });
        }else if(task.status == true){
          task.status = false;
          this.Provider.update(task.id, task).subscribe(
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
            });
        } 
       
      }

    }




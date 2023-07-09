import { Component } from '@angular/core';
 



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  showDetails= false;
  showDetails2= false;
  allowNewUser = false;
  getRandomNumber = 0;
  // serverStatus = "RED";
  serverName = "";
  serverStatus = 'Offline'
  serverCreated = false;
  servers = ["Test Server 1 ", "Test Server 2" ,"Test server 3"]
  logs : number[]= []
  logs2 : any[]=[]



  // Property Binding:
  // use [<property-name> ] and 

  // constructor(){
  //   setTimeout( () => {
  //     this.allowNewUser = true;
  //   } ,2000 )
  //   setInterval(() => {
  //     this.getRandomNumber = Math.round(Math.random()*10 )
  //   }, 1000)
  // }
  

  addServer(){
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"
    this.servers.push(this.serverName)
  }


  changeServerColor(){
    // this.serverStatus = `Server ws created with name ${this.serverName}`;
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"
    this.serverCreated = true;
  }

  getColor(){
    return this.serverStatus == "Online" ? 'green' : 'red';
  }

  // This is used when evnet is passed using event binding
  onServerNameInput(event:any){
    this.serverName = event.target.value;

  }
  isServerOnline(){
    let temp = Math.random() > 0.5 ? true : false
    console.log(temp)
    return  temp;
  }
  showDetail(){
    this.showDetails = !this.showDetails;
    this.logs.push(this.logs.length  + 1);
    return this.showDetails;
  }
  showDetail2(){
    this.showDetails = !this.showDetails;
    this.logs2.push(new Date());
    return this.showDetails;
  }

}

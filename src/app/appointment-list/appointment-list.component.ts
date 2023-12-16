import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { title } from 'process';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent  implements OnInit{
  
  newAppointmentTitle:string="";
  newAppointmentDate: Date=new Date();
  appointments: Appointment[]=[];
  id:number=this.appointments.length;

  ngOnInit(): void {
    let savedAppointment=localStorage.getItem("appointments");
    this.appointments=savedAppointment?JSON.parse(savedAppointment):[]
    this.id=savedAppointment?this.appointments[this.appointments.length-1].id+1 : 0
  }


  addAppointment():void{
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
    {
      let newAppointment: Appointment = {
        id: this.id++,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)
      localStorage.setItem("appointments", JSON.stringify(this.appointments))


     
    }
    else{
      alert("Invalid Input");
    }
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();

  }

  deleteAppointment(index:number):void{
    this.appointments.splice(index,1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))

  }
}



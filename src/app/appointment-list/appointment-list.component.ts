import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { title } from 'process';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  newAppointmentTitle:string="";
  newAppointmentDate: Date=new Date();
  appointments: Appointment[]=[];
  id:number=this.appointments.length;


  addAppointment():void{
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
    {
      let newAppointment: Appointment = {
        id: this.id++,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

     
    }
    else{
      alert("Invalid Input");
    }
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();

  }
}



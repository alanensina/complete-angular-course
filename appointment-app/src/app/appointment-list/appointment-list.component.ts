import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core'; 

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();
  appointments : Appointment[] = [];

  ngOnInit(): void {    
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() : void {
    if(this.newAppointmentDate && this.newAppointmentTitle.trim().length){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.resetFields();
      this.saveToLocalStorage();
    }
  }

  deleteAppointment(index: number) : void {
    this.appointments.splice(index, 1);
    this.saveToLocalStorage();
  }

  resetFields() : void  {
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }

  saveToLocalStorage() : void {
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}

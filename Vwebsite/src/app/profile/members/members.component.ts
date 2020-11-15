import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
 elements: any = [
    {id: 1,  image:'' , name: 'Mark', department: 'Otto' , phonenumber:'',email:'', joindate:'',length:''},
    {id: 2, image:'' , name: 'Jacob', department: 'Thornton', phonenumber:'',email:'', joindate:'',length:''},
    {id: 3, image:'' , name: 'Larry', department: 'the Bird', phonenumber:'',email:'', joindate:'',length:''}
  ];

  headElements = ['ID','Image',  'Name', 'Department', 'Phone Number','Email', 'Join Date','Length'];
  constructor() { }

  ngOnInit(): void {
  }

}

import { GenericService } from './../../core/services/generic.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private genericService: GenericService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Name: new FormControl('', Validators.required),
    });
  }
  login() {
    let body: any = {};
    body['Name'] = this.loginForm.controls['Name'].value;
    body['UserId'] = null;
    if (body['Name'] !== 'AREE') {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "An error has been occurred",
      });
    } else {
      this.genericService.Login(body).subscribe((result) => {
        localStorage.setItem('X-Aree-Session', result.SessionKey);
        this.router.navigate(
          ['/counter'],)
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'digimon-login',
	templateUrl: './digimon-login.component.html',
	styleUrls: ['./digimon-login.component.css']
})
export class DigimonLoginComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			login: [''],
			password: ['']
		})
	}

	signIn() {
		if (this.login === 'Kros' && this.password == '123456') {
			this.router.navigateByUrl('/digimon-list')
		} else {
			alert('Login Inválido')
		}
	}

	get login(): string {
		return this.form.get('login').value;
	}

	get password(): string {
		return this.form.get('password').value;
	}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'digimon-login',
	templateUrl: './digimon-login.component.html',
	styleUrls: ['./digimon-login.component.css']
})
export class DigimonLoginComponent implements OnInit {
	public form!: FormGroup

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			login: [''],
			password: ['']
		})
	}


}

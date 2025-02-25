package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;


	@Entity
	@Table(name ="category_table")//table is created
public class Category 
	{	
			@Id//primary key
			@GeneratedValue(strategy = GenerationType.IDENTITY)//auto increment
			private int cId;


			@NotEmpty
			@Size(min = 5, message = "Fullname contain atleast 5 characters")
			public String cName;


			public int getcId() {
				return cId;
			}


			public void setcId(int cId) {
				this.cId = cId;
			}


			public String getcName() {
				return cName;
			}


			public void setcName(String cName) {
				this.cName = cName;
			}


	}
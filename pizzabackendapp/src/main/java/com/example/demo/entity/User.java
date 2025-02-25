package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity // Represents the data structure or model
@Table(name = "user_table")
public class User {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @NotEmpty
    @Size(min = 2, message = "User name must contain at least 2 characters")
    @Column(name = "user_name", length = 50)
    private String userName;

    @Column(name = "user_email", unique = true, length = 50)
    @NotEmpty
    @Email(message = "User email is not valid!")
    private String userEmail;

    @Column(name = "user_password", length = 20)
    @NotEmpty
    @Size(min = 8, message = "Password must be at least 8 characters and contain uppercase, lowercase, and digits")
    @Pattern(regexp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", message = "Password must contain at least one uppercase, one lowercase letter, and one digit")
    private String userPassword;

    @Column(name = "phone_number", unique = true)
    @NotEmpty
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Phone number must start with a digit between 6 and 9 and contain exactly 10 digits")
    private String phoneNumber;

   
    @Size(min = 2, message = "Role must contain at least 2 characters")
    @Column(name = "user_role", length = 30)
    private String userRole;

    @Column(name = "user_address")
    private String userAddress;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
}
    
    
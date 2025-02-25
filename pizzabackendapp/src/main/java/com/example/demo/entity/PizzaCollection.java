package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pizza_collection")
public class PizzaCollection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pizzaId;

    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    private double price;
    
    private String pImage;

    public String getpImage() {
		return pImage;
	}

	public void setpImage(String pImage) {
		this.pImage = pImage;
	}

	// Constructors
    public PizzaCollection() {}

    public PizzaCollection(String name, Category category, double price, String pImage) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.pImage = pImage;
    }

    // Getters and Setters
    public int getPizzaId() {
        return pizzaId;
    }

    public void setPizzaId(int pizzaId) {
        this.pizzaId = pizzaId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

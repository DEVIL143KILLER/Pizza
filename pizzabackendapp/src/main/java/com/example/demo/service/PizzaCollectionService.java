package com.example.demo.service;

import com.example.demo.entity.PizzaCollection;
import com.example.demo.repository.PizzaCollectionRepository;
import com.example.demo.exception.PizzaNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaCollectionService {
@Autowired
    private  PizzaCollectionRepository pizzaRepository;

   
    // Fetch all pizzas
    public List<PizzaCollection> getAllPizzas() {
        return pizzaRepository.findAll();
    }

    // Fetch a single pizza by ID
    public PizzaCollection getPizzaById(int id) {
        return pizzaRepository.findById(id)
                .orElseThrow(() -> new PizzaNotFoundException("Pizza not found with ID: " + id));
    }

    // Add a new pizza
    public PizzaCollection addPizza(PizzaCollection pizza) {
        return pizzaRepository.save(pizza);
    }

    // Update an existing pizza
    public PizzaCollection updatePizza(int id, PizzaCollection updatedPizza) {
        return pizzaRepository.findById(id)
                .map(pizza -> {
                    pizza.setName(updatedPizza.getName());
                    pizza.setCategory(updatedPizza.getCategory());
                    pizza.setPrice(updatedPizza.getPrice());
                    pizza.setpImage(updatedPizza.getpImage());
                    return pizzaRepository.save(pizza);
                })
                .orElseThrow(() -> new PizzaNotFoundException("Pizza not found with ID: " + id));
    }

    // Delete a pizza by ID
    public void deletePizza(int id) {
        if (!pizzaRepository.existsById(id)) {
            throw new PizzaNotFoundException("Pizza not found with ID: " + id);
        }
        pizzaRepository.deleteById(id);
    }
}

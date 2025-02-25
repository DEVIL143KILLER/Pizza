package com.example.demo.controller;

import com.example.demo.entity.PizzaCollection;
import com.example.demo.service.PizzaCollectionService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pizzas")
public class PizzaCollectionController {
@Autowired
    private  PizzaCollectionService pizzaService;

    
    @GetMapping("/all")
    public List<PizzaCollection> getAllPizzas()  {
        return pizzaService.getAllPizzas();
    }

    @GetMapping("/{id}")
    public PizzaCollection getPizzaById(@PathVariable int id) {
        return pizzaService.getPizzaById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<PizzaCollection> addPizza(@RequestBody @Valid PizzaCollection pizza) {
        return ResponseEntity.ok(pizzaService.addPizza(pizza));
    }

    @PutMapping("/{id}")
    public PizzaCollection updatePizza(@PathVariable int id, @RequestBody PizzaCollection updatedPizza) {
        return pizzaService.updatePizza(id, updatedPizza);
    }

    @DeleteMapping("/{id}")
    public String deletePizza(@PathVariable int id) {
        pizzaService.deletePizza(id);
        return "Pizza deleted successfully";
    }
}


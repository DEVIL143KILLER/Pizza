package com.example.demo.repository;

import com.example.demo.entity.PizzaCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaCollectionRepository extends JpaRepository<PizzaCollection, Integer> {

   
    
    // Custom query to find pizzas by name (case insensitive)
    List<PizzaCollection> findByNameContainingIgnoreCase(String name);
}


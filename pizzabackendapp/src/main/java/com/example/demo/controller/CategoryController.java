package com.example.demo.controller;

import com.example.demo.entity.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    public Category  getCategoryById(@PathVariable  int id) {

        return categoryService.getCategoryById(id);
    }

    @PostMapping("/add")
    public Category addCategory(@RequestBody   Category category) {
        return categoryService.addCategory(category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable int id, @RequestBody Category updatedCategory) {
        Optional<Category> category = categoryService.updateCategory(id, updatedCategory);
        return category.get();      
    }

    @DeleteMapping("/{id}")
    public boolean deleteCategory(@PathVariable int id) {
        return categoryService.deleteCategory(id) ;
}
}

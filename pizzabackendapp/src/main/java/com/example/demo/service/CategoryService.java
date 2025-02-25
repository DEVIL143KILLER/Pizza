package com.example.demo.service;

import com.example.demo.entity.Category;
import com.example.demo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category  getCategoryById(int id) {
        return categoryRepository.findById(id).get();
    }

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> updateCategory(int id, Category updatedCategory) {
        return categoryRepository.findById(id).map(category -> {
            category.setcName(updatedCategory.getcName());
            return categoryRepository.save(category);
        });
    }

    public boolean deleteCategory(int id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
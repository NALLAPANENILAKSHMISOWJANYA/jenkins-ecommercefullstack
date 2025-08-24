package com.klef.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	Product findByName(String name);

    // Find products cheaper than a given price
    List<Product> findByPriceLessThan(Double price);
}

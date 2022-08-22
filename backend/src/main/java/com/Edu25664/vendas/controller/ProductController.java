package com.Edu25664.vendas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Edu25664.vendas.DTO.ProductDTO;
import com.Edu25664.vendas.service.ProductService;

@RestController 
@RequestMapping(value ="/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	private ResponseEntity<List<ProductDTO>> findAll(){
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

}

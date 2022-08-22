package com.Edu25664.vendas.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Edu25664.vendas.DTO.ProductDTO;
import com.Edu25664.vendas.entities.Product;
import com.Edu25664.vendas.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
     
	@Transactional
	public List<ProductDTO> findAll(){
	  List<Product> list = repository.findAllByOrderByNameAsc();
	  return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}

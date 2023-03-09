package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Model.expense;

public interface ApiRepository extends JpaRepository<expense, Integer>{
	@Query(value = "SELECT sum(amt) FROM expense")
	Float balance();
}

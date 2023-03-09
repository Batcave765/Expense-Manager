package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.expense;
import com.example.demo.Repository.ApiRepository;

@Service
public class ApiService {
	@Autowired
	ApiRepository repo;
	
	public List<expense> readData() {
		return repo.findAll();
	}

	public String addData(expense data) {
		repo.save(data);
		return "Addded";
	}

	public String deleteData(int id) {
		repo.deleteById(id);
		return "Deleted";
	}

	public String updateData(expense data) {
		repo.save(data);
		return "Updated";
	}
	public float returnBalance() {
		return repo.balance();
	}
}

package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.expense;
import com.example.demo.Service.ApiService;

@RestController
@RequestMapping("/expense-manager")
@CrossOrigin("*")
public class ApiController {
	@Autowired
	ApiService service;
	@PostMapping("/")
	public String create(@RequestBody expense data) {
		return service.addData(data);
	}
	@GetMapping("/")
	public List<expense> read(){
		return service.readData();
	}
	@PutMapping("/")
	public String update(@RequestBody expense data) {
		return service.updateData(data);
	}
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteData(id);
	}
	@GetMapping("/bal")
	public float returnBalance() {
		return service.returnBalance();
	}
}

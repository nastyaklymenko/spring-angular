package com.klyma.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klyma.crud.domain.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findByName(String name);
}

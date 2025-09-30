package com.example.kossweb_backend.repository;

import com.example.kossweb_backend.domain.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {}

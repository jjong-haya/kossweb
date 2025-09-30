package com.example.kossweb_backend.service;

import com.example.kossweb_backend.domain.Todo;
import com.example.kossweb_backend.repository.TodoRepository;
import java.util.List;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoService {
  private final TodoRepository repo;

  public List<Todo> findAll() { return repo.findAll(); }

  public Todo create(String title) {
    Todo t = Todo.builder().title(title).done(false).build();
    return repo.save(t);
  }
  public Todo setDone(Long id, boolean done) {
    var t = repo.findById(id).orElseThrow(
        () -> new NoSuchElementException("todo not found"));
    t.setDone(done);
    return repo.save(t);
  }
}

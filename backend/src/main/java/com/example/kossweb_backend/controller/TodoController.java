package com.example.kossweb_backend.controller;

import com.example.kossweb_backend.domain.Todo;
import com.example.kossweb_backend.dto.TodoCreateReq;
import com.example.kossweb_backend.service.TodoService;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {
  private final TodoService service;
  @GetMapping
  public List<Todo> list() {
    return service.findAll();
  }
  @PostMapping
  public Todo create(@RequestBody @Valid TodoCreateReq req) {
    return service.create(req.title());
  }

  @PatchMapping("/{id}/done")
  public Todo setDone(@PathVariable Long id,
                      @RequestBody Map<String, Object> body) {
    boolean done = Boolean.TRUE.equals(body.get("done"));
    return service.setDone(id, done);
  }
}

package com.tsk.task.controllers;

import com.tsk.task.dtos.PaginationResponse;
import com.tsk.task.dtos.Response;
import com.tsk.task.dtos.requests.TaskRequestDto;
import com.tsk.task.dtos.requests.TaskSearchDto;
import com.tsk.task.entities.Task;
import com.tsk.task.services.tasks.TaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Api(description = "Task management")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @ApiOperation("Fetch all tasks")
    @GetMapping("/api/v1/tasks")
    public ResponseEntity<Response<PaginationResponse<List<Task>>>> findAllTasks(@Valid TaskSearchDto params) {
        PaginationResponse<List<Task>> allTasks = taskService.findAllTasks(params);
        Response<PaginationResponse<List<Task>>> response = new Response<PaginationResponse<List<Task>>>(allTasks)
                .status(HttpStatus.OK.value())
                .message("LIST OF TASKS")
                .has_error(false);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ApiOperation("Add new task")
    @PostMapping("/api/v1/tasks")
    public ResponseEntity<Response<Task>> createTask(@Valid TaskRequestDto request) {
        Response<Task> response = new Response<>(taskService.addTask(request))
                .status(HttpStatus.CREATED.value())
                .message("TASK CREATED")
                .has_error(false);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @ApiOperation("Update a task")
    @PutMapping("/api/v1/tasks/{id}")
    public ResponseEntity<Response<Task>> updateTask(@PathVariable("id") Long id, TaskRequestDto request) {
        Response<Task> response = new Response<>(taskService.updateTask(id, request))
                .status(HttpStatus.OK.value())
                .message("TASK UPDATED")
                .has_error(false);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @ApiOperation("Delete a task")
    @DeleteMapping("api/v1/tasks/{id}")
    public ResponseEntity<Response<String>> deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTaskById(id);
        Response<String> response = new Response<>("TASK DELETED ")
                .status(HttpStatus.OK.value())
                .message("Request successfully executed ")
                .has_error(false);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    // todo test unitaire et integration
}

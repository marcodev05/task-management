package com.tsk.task.services.tasks;

import com.tsk.task.dtos.Pagination;
import com.tsk.task.dtos.PaginationResponse;
import com.tsk.task.dtos.requests.TaskRequestDto;
import com.tsk.task.dtos.requests.TaskSearchDto;
import com.tsk.task.entities.Task;

import java.util.List;

public interface TaskService {
    PaginationResponse<List<Task>> findAllTasks(TaskSearchDto params);

    Task addTask(TaskRequestDto request);

    Task updateTask(Long id, TaskRequestDto request);

    void deleteTaskById(Long id);
}

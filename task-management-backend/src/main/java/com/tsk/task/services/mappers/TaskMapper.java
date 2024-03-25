package com.tsk.task.services.mappers;

import com.tsk.task.dtos.requests.TaskRequestDto;
import com.tsk.task.entities.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {
    public Task fromDto(TaskRequestDto dto) {
        Task task = new Task();
        task.setName(dto.getName());
        task.setDescription(dto.getDescription());
        task.setStatus(dto.getStatus());
        task.setDateStart(dto.getDateStart());
        task.setDateFin(dto.getDateFin());
        return task;
    }
}

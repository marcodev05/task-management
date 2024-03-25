package com.tsk.task.dtos.requests;

import com.tsk.task.dtos.Pagination;
import com.tsk.task.entities.TaskStatus;
import lombok.Data;

@Data
public class TaskSearchDto {

    private Pagination pagination = new Pagination();
    private TaskStatus status;
    private String name;
}
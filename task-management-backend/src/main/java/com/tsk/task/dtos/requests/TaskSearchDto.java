package com.tsk.task.dtos.requests;

import com.tsk.task.dtos.Pagination;
import com.tsk.task.entities.TaskStatus;
import lombok.Data;

import java.util.List;

@Data
public class TaskSearchDto {
    private Pagination pagination = new Pagination();
    private List<TaskStatus> status;
    private String keyword;
}
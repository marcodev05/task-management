package com.tsk.task.dtos.requests;

import com.tsk.task.entities.TaskStatus;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@NoArgsConstructor
public class TaskRequestDto {

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Description should not be null")
    private String description;

    private TaskStatus status = TaskStatus.CREATED;

    private Date dateFin;

    private Date dateStart;
}

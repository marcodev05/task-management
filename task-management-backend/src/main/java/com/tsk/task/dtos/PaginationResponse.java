package com.tsk.task.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class PaginationResponse<T> {
    private T content;
    private Long total;
}

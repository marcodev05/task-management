package com.tsk.task.dtos;

import lombok.Data;

@Data
public class Pagination {

    private Integer page;
    private Integer size;

    public Pagination() {
        this.page = 1;
        this.size = 10;
    }
}

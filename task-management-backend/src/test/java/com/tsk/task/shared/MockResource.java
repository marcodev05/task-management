package com.tsk.task.shared;

import com.tsk.task.entities.Task;
import com.tsk.task.entities.TaskStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;

public class MockResource {

    public static Task createMockTaskOne(){
        Task task = new Task();
        task.setName("Task One");
        task.setDescription("Task One description");
        task.setStatus(TaskStatus.CREATED);
        return task;
    }

    public static Page<Task> createMockTaskPage(){
        return new PageImpl<>(List.of(createMockTaskOne()));
    }
}

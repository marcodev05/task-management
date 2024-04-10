package com.tsk.task.services.tasks.impl;

import com.tsk.task.dtos.Pagination;
import com.tsk.task.dtos.PaginationResponse;
import com.tsk.task.dtos.requests.TaskSearchDto;
import com.tsk.task.entities.Task;
import com.tsk.task.entities.TaskStatus;
import com.tsk.task.repositories.TaskRepository;
import com.tsk.task.services.mappers.TaskMapper;
import com.tsk.task.shared.MockResource;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TaskServiceImplTest {

    @InjectMocks
    private TaskServiceImpl taskService;
    @Mock
    private TaskMapper taskMapper;
    @Mock
    private TaskRepository taskRepository;

    Task taskOne = MockResource.createMockTaskOne();

    @Test
    void findAllTasks() {
        //given
        TaskSearchDto dto = new TaskSearchDto();
        dto.setName("one");
        dto.setPagination(new Pagination());
        dto.setStatus(TaskStatus.CREATED);

        // mock config
        Page<Task> mockTaskPage = MockResource.createMockTaskPage();
        when(taskRepository.findAll(any(Pageable.class))).thenReturn(mockTaskPage);

        PaginationResponse<List<Task>> paginationResponse = taskService.findAllTasks(dto);

        // then
        verify(taskRepository, times(1)).findAll(any(Pageable.class));
        assertEquals(mockTaskPage.getContent(), paginationResponse.getContent());
    }

    @Test
    void addTask() {
    }

    @Test
    void updateTask() {
    }

    @Test
    void deleteTaskById() {
    }
}
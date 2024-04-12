package com.tsk.task.services.tasks.impl;

import com.tsk.task.commons.CollectionUtils;
import com.tsk.task.commons.StringUtils;
import com.tsk.task.dtos.PaginationResponse;
import com.tsk.task.dtos.requests.TaskRequestDto;
import com.tsk.task.dtos.requests.TaskSearchDto;
import com.tsk.task.entities.Task;
import com.tsk.task.exceptions.NotFoundResourceException;
import com.tsk.task.repositories.TaskRepository;
import com.tsk.task.services.mappers.TaskMapper;
import com.tsk.task.services.tasks.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    @Override
    public PaginationResponse<List<Task>> findAllTasks(TaskSearchDto params) {
        Specification<Task> specification = (root, criteriaQuery, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!StringUtils.isBlank(params.getKeyword())) {
                String keyword = params.getKeyword().toLowerCase();
                Predicate keywordPredicate = criteriaBuilder.or(
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + keyword + "%"),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), "%" + keyword + "%")
                );
                predicates.add(keywordPredicate);
            }
            if (!CollectionUtils.isEmpty(params.getStatuses())) {
                Predicate statusPredicate = root.get("status").in(params.getStatuses());
                predicates.add(statusPredicate);
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        Pageable pageable = PageRequest.of(params.getPagination().getPage() - 1, params.getPagination().getSize());
        Page<Task> taskPage = taskRepository.findAll(specification, pageable);
        return new PaginationResponse<>(taskPage.getContent(), taskPage.getTotalElements());
    }

    @Override
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new NotFoundResourceException("task", id));
    }

    @Override
    public Task addTask(TaskRequestDto request) {
        Task task = taskMapper.fromDto(request);
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long id, TaskRequestDto request) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new NotFoundResourceException("task", id));
        task.setName(request.getName());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());
        return taskRepository.save(task);
    }

    @Override
    public Task deleteTaskById(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new NotFoundResourceException("task", id));
        taskRepository.deleteById(task.getId());
        return task;
    }
}

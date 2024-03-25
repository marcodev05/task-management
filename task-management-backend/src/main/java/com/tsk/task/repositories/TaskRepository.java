package com.tsk.task.repositories;

import com.tsk.task.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}

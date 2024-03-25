package com.tsk.task.entities;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date dateFin;

    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date dateStart;
}

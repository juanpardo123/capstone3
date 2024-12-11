package com.example.Capstone;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TasksDto {
   private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private String frequency;
    private boolean preferred;
    private boolean completed;

}

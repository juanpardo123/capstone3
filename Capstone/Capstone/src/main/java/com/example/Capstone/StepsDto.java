package com.example.Capstone;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StepsDto {
    private Long id;
    private int sequence;
    private String name;
    private String description;
    private String imageUrl;
    private Long taskId;
}

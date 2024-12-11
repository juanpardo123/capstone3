package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TasksDtoTest {

    TasksDto tasksDto = new TasksDto();
    @Test
    public void hasID() {
        Long id = 12345L;
        tasksDto.setId(id);
        assertEquals(id, tasksDto.getId());
    }


    @Test
    public void hasName() {
        String name = "Task 1";
        tasksDto.setName(name);
        assertEquals(name, tasksDto.getName());
    }

    @Test
    public void hasDescription() {
        String description = "test description";
        tasksDto.setDescription(description);
        assertEquals(description, tasksDto.getDescription());
    }

    @Test
    public void hasImageUrl() {
        String imageUrl = "testImageUrl";
        tasksDto.setImageUrl(imageUrl);
        assertEquals(imageUrl, tasksDto.getImageUrl());
    }

    @Test
    public void hasFrequencyId() {
        Long frequencyId = 1234L;
    }


}

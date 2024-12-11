package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TasksTest {

    Tasks task = new Tasks();
    @Test
    public void hasID() {
        Long id = 12345L;
        task.setId(id);
        assertEquals(id, task.getId());
    }


    @Test
    public void hasName() {
        String name = "Task 1";
        task.setName(name);
        assertEquals(name, task.getName());
    }

    @Test
    public void hasDescription() {
        String description = "test description";
        task.setDescription(description);
        assertEquals(description, task.getDescription());
    }

    @Test
    public void hasImageUrl() {
        String imageUrl = "testImageUrl";
        task.setImageUrl(imageUrl);
        assertEquals(imageUrl, task.getImageUrl());
    }

    @Test
    public void hasFrequencyId() {
        Long frequencyId = 1234L;
    }


}

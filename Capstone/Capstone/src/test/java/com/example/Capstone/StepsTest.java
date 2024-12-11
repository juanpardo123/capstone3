package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class StepsTest {
    Steps steps = new Steps();
    @Test
    public void hasID() {
        Long id = 12345L;
        steps.setId(id);
        assertEquals(id, steps.getId());
    }

    @Test
    public void hasSequence() {
        Integer sequence = 123;
        steps.setSequence(sequence);
        assertEquals(sequence, steps.getSequence());
    }

    @Test
    public void hasName() {
        String name = "Drinks";
        steps.setName(name);
        assertEquals(name, steps.getName());
    }

    @Test
    public void hasDescription() {
        String description = "Test Description";
        steps.setDescription(description);
        assertEquals(description, steps.getDescription());
    }

    @Test
    public void hasImageUrl() {
        String imageUrl = "TestUrl";
        steps.setImageUrl(imageUrl);
        assertEquals(imageUrl, steps.getImageUrl());
    }

    @Test
    public void hasTaskId() {
        Long taskId = 12345L;

        steps.setTaskId(taskId);
    }

}

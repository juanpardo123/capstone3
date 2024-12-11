package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class StepsDtoTest {
    StepsDto stepsDto = new StepsDto();
    @Test
    public void hasID() {
        Long id = 12345L;
        stepsDto.setId(id);
        assertEquals(id, stepsDto.getId());
    }

    @Test
    public void hasSequence() {
        Integer sequence = 123;
        stepsDto.setSequence(sequence);
        assertEquals(sequence, stepsDto.getSequence());
    }

    @Test
    public void hasName() {
        String name = "Drinks";
        stepsDto.setName(name);
        assertEquals(name, stepsDto.getName());
    }

    @Test
    public void hasDescription() {
        String description = "Test Description";
        stepsDto.setDescription(description);
        assertEquals(description, stepsDto.getDescription());
    }

    @Test
    public void hasImageUrl() {
        String imageUrl = "TestUrl";
        stepsDto.setImageUrl(imageUrl);
        assertEquals(imageUrl, stepsDto.getImageUrl());
    }

    @Test
    public void hasTaskId() {

        Long taskId = 12345L;
        stepsDto.setTaskId(taskId);
        assertEquals(taskId, stepsDto.getTaskId());
    }

}

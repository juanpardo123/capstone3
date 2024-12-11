package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SeasonsDtoTest {

    SeasonsDto seasonDto = new SeasonsDto();
    @Test
    public void hasID() {
        Long id = 12345L;
        seasonDto.setId(id);
        assertEquals(id, seasonDto.getId());
    }


    @Test
    public void hasName() {
        String name = "Drinks";
        seasonDto.setName(name);
        assertEquals(name, seasonDto.getName());
    }

    @Test
    public void hasSequence() {
        Integer sequence = 456;
        seasonDto.setSequence(sequence);
        assertEquals(sequence, seasonDto.getSequence());
    }


}

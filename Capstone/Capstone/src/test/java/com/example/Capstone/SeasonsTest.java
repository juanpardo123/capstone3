package com.example.Capstone;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import com.example.Capstone.Seasons;
import org.junit.jupiter.api.Test;

public class SeasonsTest {

    Seasons season = new Seasons();
    @Test
    public void hasID() {
        Long id = 12345L;
        season.setId(id);
        assertEquals(id, season.getId());
    }


    @Test
    public void hasName() {
        String name = "Drinks";
        season.setName(name);
        assertEquals(name, season.getName());
    }

    @Test
    public void hasSequence() {
        Integer sequence = 456;
        season.setSequence(sequence);
        assertEquals(sequence, season.getSequence());
    }


}

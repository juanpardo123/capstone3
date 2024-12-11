package com.example.Capstone;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Objects;


@Getter
@Setter
@Entity
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String name;
    private String description;
    private String imageUrl;
    private String frequency;
    private String season;
    private boolean preferred;
    private boolean completed;


    @OneToMany(mappedBy = "taskId")
    private List<Steps> steps;


    @Override
    public boolean equals(Object o) {
        //checks if o is the same intance
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        //if not checks if null if either return false
        Tasks that = (Tasks) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description) &&
                Objects.equals(imageUrl, that.imageUrl) &&
                Objects.equals(frequency, that.frequency);
        //if true casts it to OptionType and compares values of the fields
    }
}

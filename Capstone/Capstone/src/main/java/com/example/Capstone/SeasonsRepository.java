package com.example.Capstone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeasonsRepository extends JpaRepository<Seasons, Long> {

    Seasons findByName(String seasonName);
}

package com.example.Capstone;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UsersTest {

    Users user = new Users();
    @Test
    public void hasID() {
        Long id = 12345L;
        user.setId(id);
        assertEquals(id, user.getId());
    }

    @Test
    public void hasUserName() {
        String username = "userTest";
        user.setUsername(username);
        assertEquals(username, user.getUsername());
    }


    @Test
    public void hasPassword() {
        String password = "testPassword123";
        user.setPassword(password);
        assertEquals(password, user.getPassword());
    }

    @Test
    public void hasEmail() {
        String email = "testEmail@test.com";
        user.setEmail(email);
        assertEquals(email, user.getEmail());
    }

}

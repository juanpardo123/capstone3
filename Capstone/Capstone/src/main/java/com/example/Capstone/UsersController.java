
package com.example.Capstone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController { 

    @Autowired
    private UsersService usersService;

    @GetMapping("/users")
    public List<Users> getMenuItemDetails() {{
        return usersService.getAllUsers();

    }
    }

    @GetMapping("/users/{id}")
    public Users getMenuItemDetailsByUserId(@PathVariable Long id) {{
        return usersService.getUserByUserId(id);

    }
    }
}

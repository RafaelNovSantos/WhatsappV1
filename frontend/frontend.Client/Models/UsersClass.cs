﻿namespace frontend.Client.Models;

public class UsersClass
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public bool Status { get; set; } = true;
    public string Profile { get; set; } = string.Empty;
}
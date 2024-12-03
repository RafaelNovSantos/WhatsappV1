using System.Security.Cryptography.X509Certificates;

namespace frontend.Client.Models;

public class QuickResponseClass
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Visibility { get; set; } = string.Empty;
    
}
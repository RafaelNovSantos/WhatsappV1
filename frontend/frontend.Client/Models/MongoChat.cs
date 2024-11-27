using System.Text.Json.Serialization;

namespace frontend.Client.Models
{
    public class MongoChat
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("telefone_number")]
        public string Telefone_Number { get; set; }
       
        public Chat ToChat()
        {
            return new Chat
            {
                Username = Name,
                Tag = "EU",
                AvatarUrl = "AvatarUrls/avatar4.png",
                Message = "Precisamos revisar os relatórios financeiros.",
                Telefone_Number = Telefone_Number,
                HasUnreadMessages = true,
            };
        }
    }
    
}

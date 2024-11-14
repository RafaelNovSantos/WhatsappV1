namespace frontend.Client.Models
{
    public class Chat
    {
        public string Message { get; set; }
        public string Tag { get; set; }
        public string AvatarUrl { get; set; }
        public string Username { get; set; }
        public bool HasUnreadMessages { get; set; }
    }

    public class Message
    {
        public string Sender { get; set; }
        public string Content { get; set; }
    }

    // Coloque as variáveis dentro de uma classe
    public class ChatService
    {
        public List<Chat> Chats { get; set; } = new List<Chat>
        {
            new Chat { Username = "Alice", Tag = "ATA", AvatarUrl = "AvatarUrls/avatar1.png", Message = "Oi, pessoal!", HasUnreadMessages = true },
            new Chat { Username = "Bob", Tag = "DEV", AvatarUrl = "AvatarUrls/avatar2.png", Message = "Alguém já viu a atualização?", HasUnreadMessages = false },
            new Chat { Username = "Charlie", Tag = "SUP", AvatarUrl = "AvatarUrls/avatar3.png", Message = "Estou aqui para ajudar.", HasUnreadMessages = true }
        };

        public List<Message> Messages { get; set; } = new List<Message>
        {
            new Message { Sender = "Alice", Content = "Oi, como vai?" },
            new Message { Sender = "Bob", Content = "Tudo bem! E você?" }
        };
    }
}
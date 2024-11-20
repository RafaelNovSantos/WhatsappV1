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
        public string Receiver { get; set; }
        public string Content { get; set; }
        public DateTime SentAt { get; set; }  // A data e hora de envio
    }

    // Coloque as variáveis dentro de uma classe
    public class ChatService
    {
        public List<Chat> Chats { get; set; } = new List<Chat>
        {
            new Chat { Username = "Laura", Tag = "FIN", AvatarUrl = "AvatarUrls/avatar4.png", Message = "Precisamos revisar os relatórios financeiros.", HasUnreadMessages = true },
            new Chat { Username = "Marco", Tag = "ENG", AvatarUrl = "AvatarUrls/avatar5.png", Message = "O projeto está em fase final de testes.", HasUnreadMessages = false },
            new Chat { Username = "Sofia", Tag = "HR", AvatarUrl = "AvatarUrls/avatar6.png", Message = "Lembrete: Reunião às 15h.", HasUnreadMessages = true },
            new Chat { Username = "Carlos", Tag = "MKT", AvatarUrl = "AvatarUrls/avatar7.png", Message = "Campanha lançada com sucesso!", HasUnreadMessages = true },
            new Chat { Username = "Ana", Tag = "SUP", AvatarUrl = "AvatarUrls/avatar8.png", Message = "Posso ajudar com isso?", HasUnreadMessages = false },
            new Chat { Username = "Felipe", Tag = "ATA", AvatarUrl = "AvatarUrls/avatar9.png", Message = "Atualização programada para amanhã.", HasUnreadMessages = true },
            new Chat { Username = "Juliana", Tag = "DEV", AvatarUrl = "AvatarUrls/avatar10.png", Message = "Code review concluído.", HasUnreadMessages = false },
            new Chat { Username = "Ricardo", Tag = "OPS", AvatarUrl = "AvatarUrls/avatar11.png", Message = "Sistemas operacionais atualizados.", HasUnreadMessages = true },
            new Chat { Username = "Bianca", Tag = "QA", AvatarUrl = "AvatarUrls/avatar12.png", Message = "Nenhum bug encontrado na última rodada de testes.", HasUnreadMessages = false }
        };

        public List<Message> Messages { get; set; } = new List<Message>
        {
            new Message { Sender = "Laura", Content = "Os relatórios foram atualizados na pasta compartilhada." },
            new Message { Sender = "Marco", Content = "Precisamos de aprovação para iniciar o próximo passo." },
            new Message { Sender = "Sofia", Content = "Conseguiu verificar as inscrições para o evento?" },
            new Message { Sender = "Carlos", Content = "Vamos monitorar os resultados da campanha nas próximas 48h." },
            new Message { Sender = "Ana", Content = "Você pode me passar os detalhes do problema?" },
            new Message { Sender = "Felipe", Content = "O backup foi concluído com sucesso." }

        };
    }
}
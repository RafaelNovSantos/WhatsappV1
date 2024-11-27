using System.Text.Json.Serialization;

namespace frontend.Client.Models
{
    public class InputJsonMessage
    {
        [JsonPropertyName("From")]
        public string From { get; set; }

        [JsonPropertyName("To")]
        public string To { get; set; }

        [JsonPropertyName("MessageId")]
        public MessageId MessageId { get; set; }

        [JsonPropertyName("Type")]
        public string Type { get; set; }

        [JsonPropertyName("Content")]
        public string Content { get; set; }

        [JsonPropertyName("IsFromMe")]
        public bool IsFromMe { get; set; }

        [JsonPropertyName("Timestamp")]
        public long Timestamp { get; set; }

        public Message ToMessage()
        {
            return new Message
            {
                Sender = this.From,
                Receiver = this.To,
                Content = this.Content,
                Timestamp = DateTimeOffset
                    .FromUnixTimeSeconds(this.Timestamp)
                    .DateTime
            };
        }
    }

    public class MessageId
    {
        [JsonPropertyName("fromMe")]
        public bool FromMe { get; set; }

        [JsonPropertyName("remote")]
        public string Remote { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("self")]
        public string Self { get; set; }

        [JsonPropertyName("_serialized")]
        public string Serialized { get; set; }
    }
}
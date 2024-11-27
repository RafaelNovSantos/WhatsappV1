using frontend.Client.Models;
using frontend.Client.Pages;
using System.Diagnostics;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace frontend.Client.Service
{
    public class ChatService
    {
       private readonly HttpClient _httpClient;

        public List<Chat> mgChats { get; private set; } = new List<Chat>();
        public ChatService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task FetchMessagesAsync()
        {
            var url = "http://localhost:3000/clients";

            try
            {
                var response = await _httpClient.GetAsync(url);

                if (response.IsSuccessStatusCode)
                {
                    var responseContent = await response.Content.ReadAsStringAsync();

                    // Desserializa o JSON recebido
                    var messageResponse = JsonSerializer.Deserialize<List<MongoChat>>(
                        responseContent,
                        new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                    if (messageResponse != null)
                    {
                        List<Chat> messages = new List<Chat>();
                        foreach(var message in messageResponse)
                        {
                            var chat = message.ToChat();
                            messages.Add(chat);
                        }
                        mgChats = messages;
                    }
                    Debug.WriteLine(mgChats.Count);
                }
                else
                {
                    Console.WriteLine($"Erro ao buscar contatos. Código: {response.StatusCode}");
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Erro ao conectar à API: {ex.Message}");
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"Erro ao processar os dados retornados pela API: {ex.Message}");
            }
        }
    }
}


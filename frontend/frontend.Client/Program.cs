using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using frontend.Client.Models;




var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddMudServices();
builder.Services.AddSingleton<ChatService>();



await builder.Build().RunAsync();
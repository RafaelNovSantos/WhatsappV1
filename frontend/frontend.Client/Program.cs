using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using frontend.Client.Services;
using MudBlazor.Services;
using frontend.Client.Models;
using frontend.Client.Pages.Config.GeneralAjust.LayoutComponents;


var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddMudServices();
builder.Services.AddSingleton<ChatService>();
builder.Services.AddScoped<DayService>();
builder.Services.AddSingleton<TableDaysSync>();




await builder.Build().RunAsync();
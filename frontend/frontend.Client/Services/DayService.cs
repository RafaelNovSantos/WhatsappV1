using frontend.Client.Models;

namespace frontend.Client.Services;

public class DayService
{
    public List<DayClass> Days { get; private set; } = new List<DayClass>();

    public event Action? OnChange;

    public void AddDay(DayClass day)
    {
        Days.Add(day);
        NotifyStateChanged();
    }

    public void RemoveDay(DayClass day)
    {
        Days.Remove(day);
        NotifyStateChanged();
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}

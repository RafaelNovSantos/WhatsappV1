public class TableDaysSync
{
    // Ação que será registrada
    public Action SyncTableAction { get; set; }

    // Método para registrar a ação (syncTable)
    public void RegisterSyncTableAction(Action syncTableAction)
    {
        SyncTableAction = syncTableAction;
    }

    // Método para chamar a ação registrada
    public void CallSyncTable()
    {
        SyncTableAction?.Invoke();
    }
}
namespace ChatApp.Models;

public class ServerMessage
{
    public MessageLogLevel Level { get; set; }
    public string MessageBody { get; set; } = string.Empty;
}

public enum MessageLogLevel
{
    Info = 600,
    Warning,
    Error
}

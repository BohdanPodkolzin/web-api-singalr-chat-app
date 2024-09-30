using ChatApp.Models;

namespace ChatApp.Services
{
    public interface IChatClient
    {
        Task JoinChatRoom(string permission, string greetingsPhrase);
        Task SendMessage(string message);
    }
}

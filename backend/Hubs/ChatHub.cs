using ChatApp.Models;
using ChatApp.Services;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task JoinChat(UserConnection connection)
        {
            await Clients.All.JoinChatRoom("admin", $"{connection.Username} has joined");
        }

        public async Task JoinSpecificChat(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
            await Clients
                .Group(connection.ChatRoom)
                .JoinChatRoom("admin", $"{connection.Username} has joined {connection.ChatRoom}");
        }
    }
}

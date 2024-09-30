using ChatApp.Hubs;
using ChatApp.Models;
using ChatApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController(IHubContext<ChatHub, IChatClient> hubContext) : ControllerBase
    {
        private readonly IHubContext<ChatHub, IChatClient> _hubContext = hubContext;

        [HttpPost]
        public async Task<IActionResult> SendMessageFromServer([FromBody] ServerMessage message)
        {
            await _hubContext.Clients.All.SendMessage($"{message.Level}: {message.MessageBody}");

            return Ok();
        }
    }
}

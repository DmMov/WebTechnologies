using MailKit.Net.Smtp;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Services
{
    public class EmailService
    {
        public void SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Admin", "movchanyukd@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("User", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                client.ConnectAsync("smtp.gmail.com", 465, true);
                client.AuthenticateAsync("movchanyukd@gmail.com", "ptubwpamwnnzpikm");
                client.SendAsync(emailMessage);
                client.DisconnectAsync(true);
            }
        }
    }
}

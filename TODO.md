# TODO

## Bot API

This API allows the router to communicate with the bots and run evaluations. It can instantiate bots in different channels and through different APIs.

Each bot is defined by:

- a username
- the name of the person it is emulating
- an endpoint (URL)

Only one endpiint should be defined per bot. The endpoint will be called by the gateway when the bot is tagged or replied to, with the following POST request:

### Request [POST]

- Headers
  - X-CALLER-KEY: A secret key that we will use to authenticate the request.
- Body
  - **context** (array[Message], required) - Previous messages relevant to the request.
  - **conversation** (array[Conversation], optional) - If previous exchanges with the bot occurred, a set of these exchanges.
  - **message** (Message, required) - The tagged/reply message.
  - **users** (array[User], optional) - Information on mentioned users, by id.
  
<details>
  <summary>Type definitions</summary>

### Message (object)

- **from** (string, required) - The id of the user who sent the message, or "BOT" if the message was sent by the bot.
- **tagged** (array[string], optional) - The ids of the users who were tagged in the message.
- **id** (string, required) - The unique identifier for the message.
- **text** (string, required) - The content of the message.
- **timestamp** (string, required) - The time when the message was sent.

### Conversation (object)

- **id** (string, required) - The unique identifier for the conversation.
- **messages** (array[Message], required) - The messages in the conversation, ie all the tagged/reply messages from the channel, plus the bot's reply.

### User (object)

- **id** (string, required) - The unique identifier for the user.
- **username** (string, required) - The username of the user.

</details>

### Response

- **message** (string, required) - The message to be sent to the channel.

The response message will automatically tag users in the message if they were tagged in the original message, unless the message is already a reply to a message that was tagged.

The bot's message will be posted as a reply.


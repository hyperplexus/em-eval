# em.eval

For now, a bare-minimum CLI evaluator is the only thing that's usable.

You can test the evaluation functionality by running:

```bash
yarn
OPENAI_API_KEY="sk-MMoKomB0" yrun eval
```

This is how it looks:

![Evaluation](docs/eval.png)

## Future eval spec

The bot emulating each person will be evaluated based on its ability to generate relevant and coherent responses. The evaluation process will involve the following steps.

1. The bot receives a conversation parameter, which is an array of Message objects. Each Message object represents a previous message in the conversation.
2. The bot's response is recorded, and it is compared via embeddings distance to the original one. The closer the response, the higher the score.
3. The bot's answer and performance is recorded.

The process is repeated with more sections of the conversation: first with the first question only, then with the original first question, the original first answer and the secong question, and so on.

The conversation parameter is an array of Message objects. Each Message object has the following structure:

```json
[{
  "from": "string", // The id of the user who sent the message.
  "tagged": ["string"], // The ids of the users who were tagged in the message.
  "id": "string", // The unique identifier for the message.
  "text": "string", // The content of the message.
  "timestamp": "string" // The time when the message was sent.
}]
```

The `conversation` parameter is passed in each call to the bot's endpoint. The bot uses this parameter to understand the context of the conversation and generate a relevant response.

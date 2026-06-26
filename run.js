const response = await env.AI.run(
  'deepseek/deepseek-v4-pro',
  {
    messages: [{ content: 'What is the capital of France?', role: 'user' }],
    model: 'deepseek/deepseek-v4-pro',
  },
)
console.log(response)

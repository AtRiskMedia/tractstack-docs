---
title: Assembly AI Integration
description: Integrate Assembly AI's LeMUR API for AI-powered content generation and analysis
---

# Assembly AI Integration

TractStack integrates with Assembly AI's LeMUR API to provide AI-powered content generation, analysis, and processing capabilities. This integration enables automated content creation, text analysis, and intelligent content processing within your content management workflow.

## Configuration

### Environment Variables

Set up Assembly AI integration in your environment configuration:

```bash
# Required: Assembly AI API Key
AAI_API_KEY=your_assembly_ai_api_key_here

# Optional: Custom API endpoint (defaults to Assembly AI's endpoint)
AAI_API_ENDPOINT=https://api.assemblyai.com
```

### API Key Setup

1. **Get API Key**: Sign up at [Assembly AI](https://www.assemblyai.com) and obtain your API key
2. **Environment Configuration**: Add the key to your `.env` file or environment variables
3. **Tenant Configuration**: The API key is configured per tenant in TractStack

## API Usage

### Basic Request Format

The Assembly AI integration uses the LeMUR API for text processing tasks:

```json
{
  "prompt": "Your question or instruction",
  "input_text": "Content to analyze",
  "final_model": "anthropic/claude-3-5-sonnet",
  "max_tokens": 1000,
  "temperature": 0.7
}
```

### Request Parameters

| Parameter     | Type    | Required | Description                                            |
| ------------- | ------- | -------- | ------------------------------------------------------ |
| `prompt`      | string  | Yes      | The instruction or question for the AI                 |
| `input_text`  | string  | Yes      | The content to analyze or process                      |
| `final_model` | string  | No       | AI model to use (default: anthropic/claude-3-5-sonnet) |
| `max_tokens`  | integer | No       | Maximum response length (default: 4000)                |
| `temperature` | float   | No       | Response creativity (0.0-1.0, default: 0.0)            |

### Available Models

- `anthropic/claude-3-5-sonnet` (default)
- `anthropic/claude-3-haiku`
- `anthropic/claude-3-opus`

## Content Generation Use Cases

### Title and Slug Generation

Automatically generate titles and URL slugs for content:

```json
{
  "prompt": "Generate a concise title (maximum 40-50 characters) and a URL-friendly slug that captures the essence of this content. Return only JSON with 'title' and 'slug' keys.",
  "input_text": "Your markdown content here",
  "final_model": "anthropic/claude-3-5-sonnet",
  "temperature": 0.3,
  "max_tokens": 200
}
```

### Content Writing Assistance

Generate new content based on prompts and context:

```json
{
  "prompt": "Write a professional landing page section about [topic]. Use an engaging, confident tone. Include a clear value proposition and call-to-action.",
  "input_text": "Reference context or existing content",
  "final_model": "anthropic/claude-3-5-sonnet",
  "temperature": 0.7,
  "max_tokens": 4000
}
```

### Content Analysis

Analyze existing content for insights:

```json
{
  "prompt": "Analyze this content for tone, key messages, and improvement suggestions. Provide specific, actionable feedback.",
  "input_text": "Content to analyze",
  "final_model": "anthropic/claude-3-5-sonnet",
  "temperature": 0.3,
  "max_tokens": 2000
}
```

## Frontend Integration

### Making API Calls

From your frontend components, call the Assembly AI service:

```typescript
const response = await fetch(`${goBackend}/api/v1/aai/askLemur`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Tenant-ID": tenantId,
  },
  credentials: "include",
  body: JSON.stringify({
    prompt: "Your prompt here",
    input_text: "Content to process",
    final_model: "anthropic/claude-3-5-sonnet",
    temperature: 0.7,
    max_tokens: 4000,
  }),
});

const result = await response.json();
```

### Response Handling

The API returns responses in this format:

```json
{
  "success": true,
  "data": {
    "response": "Generated content or analysis"
  }
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error description"
}
```

### Error Handling

Implement proper error handling in your frontend:

```typescript
try {
  const response = await fetch(apiUrl, requestOptions);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Processing failed");
  }

  // Handle successful response
  const content = result.data.response;
} catch (error) {
  console.error("Assembly AI error:", error.message);
  // Handle error state
}
```

## Built-in Features

### Content Editor Integration

The Assembly AI integration is built into TractStack's content editor for:

- **Automatic Title Generation**: Generate titles and slugs from content
- **Content Suggestions**: Get writing assistance and improvements
- **Content Analysis**: Analyze tone, structure, and effectiveness

### Markdown Processing

Integrated with markdown processing pipeline for:

- **Auto-completion**: Suggest content completions
- **Style Analysis**: Ensure consistent writing style
- **SEO Optimization**: Generate SEO-friendly titles and descriptions

### Page Generation

Supports automated page creation with:

- **Template-based Generation**: Use predefined prompts for different page types
- **Context-aware Content**: Generate content that fits your site's style
- **Bulk Processing**: Generate multiple pages or sections efficiently

## Best Practices

### Prompt Engineering

**Be Specific**: Provide clear, detailed prompts for better results

```json
{
  "prompt": "Write a technical documentation section about API authentication. Include code examples, security considerations, and troubleshooting tips. Use a professional, instructional tone."
}
```

**Use Context**: Provide relevant context in input_text

```json
{
  "input_text": "Existing API documentation context, brand voice examples, technical requirements"
}
```

**Set Appropriate Parameters**: Adjust temperature and tokens based on use case

- **Low temperature (0.0-0.3)**: For factual, consistent content
- **Medium temperature (0.4-0.7)**: For creative but controlled content
- **High temperature (0.8-1.0)**: For very creative content

### Performance Optimization

**Batch Requests**: Group related content generation tasks
**Cache Results**: Store generated content to avoid regeneration
**Async Processing**: Use non-blocking requests for better UX
**Timeout Handling**: Implement appropriate timeout values

### Content Quality

**Review Generated Content**: Always review AI-generated content before publishing
**Maintain Brand Voice**: Use consistent prompts that reflect your brand
**Iterate on Prompts**: Refine prompts based on output quality
**Human Oversight**: Keep human editorial control in the content workflow

## Rate Limits and Costs

### API Limits

- Monitor your Assembly AI usage and limits
- Implement request throttling if needed
- Consider caching strategies for repeated requests

### Cost Management

- Use appropriate token limits to control costs
- Choose models based on complexity needs
- Monitor usage patterns and optimize accordingly

## Troubleshooting

### Common Issues

**API Key Not Configured**

- Verify `AAI_API_KEY` is set in environment
- Check tenant-specific configuration
- Ensure API key is valid and active

**Request Failures**

- Check network connectivity
- Verify request format and parameters
- Review Assembly AI service status

**Poor Quality Results**

- Refine prompts for clarity and specificity
- Adjust temperature and token settings
- Provide better context in input_text

**Timeout Issues**

- Increase timeout values for complex requests
- Consider breaking large requests into smaller parts
- Check Assembly AI service response times

### Debug Mode

Enable debug logging to troubleshoot issues:

```bash
# Enable detailed logging
LOG_LEVEL=debug

# Assembly AI specific logging
AAI_DEBUG=true
```

This will provide detailed information about API requests and responses in your application logs.

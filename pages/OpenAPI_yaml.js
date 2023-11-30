const openAPIYaml = {
  openapi: '3.0.0',
  info: {
    title: 'File Operations API',
    description: 'API for reading, updating, and deleting files.',
    version: '1.0.0'
  },
  servers: [
     { url: process.env.MY_SERVER }
  ],
  paths: {
    '/api/readFile': {
      get: {
        summary: 'Read a file',
        operationId: 'readFile',
        parameters: [
          { name: 'filename', in: 'query', required: true, schema: { type: 'string' } }
        ],
        responses: {
          '200': {
            description: 'File content retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    content: { type: 'string' }
                  }
                }
              }
            }
          },
          '500': {
            description: 'Error reading file'
          }
        }
      }
    },
    '/api/updateFile': {
      put: {
        summary: 'Update a file',
        operationId: 'updateFile',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  filename: { type: 'string' },
                  content: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'File updated successfully'
          },
          '500': {
            description: 'Error updating file'
          }
        }
      }
    },
    '/api/deleteFile': {
      delete: {
        summary: 'Delete a file',
        operationId: 'deleteFile',
        parameters: [
          { name: 'filename', in: 'query', required: true, schema: { type: 'string' } }
        ],
        responses: {
          '200': {
            description: 'File deleted successfully'
          },
          '500': {
            description: 'Error deleting file'
          }
        }
      }
    },
    '/api/listFiles': {
      get: {
        summary: 'List files in a directory',
        operationId: 'listFiles',
        responses: {
          '200': {
            description: 'File list retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    files: {
                      type: 'array',
                      items: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          '500': {
            description: 'Error listing files'
          }
        }
      }
    }
  }
};

export default openAPIYaml;
Please install node, npm and other npm modules including express (follow package.json )
Express uses 'http://localhost:3000/application' url.
Methods:
A) GET  'http://localhost:3000/application?workflowId='workflowId_number' returns JSON with recorded data (if any)
Note: for now returns JSON (no data) for workflowId == 123 and for other workflowId just returns it's number;
B) POST 'http://localhost:3000/application?workflowId='workflowId_number' saves data for the 'workflowId_number' (that is not in place yet)
C) PUT  'http://localhost:3000/application' generates new workflowId and returns in body


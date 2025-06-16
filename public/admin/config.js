// Decap CMS Configuration for Farm Template
const config = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  local_backend: true,
  media_folder: '/public/images',
  public_folder: '/images',
  
  collections: [
    // Products Collection
    {
      name: 'products',
      label: 'Products',
      folder: 'src/content/products',
      create: true,
      slug: '{{slug}}',
      extension: 'json',
      format: 'json',
      editor: {
        preview: false
      },
      fields: [
        {
          label: 'Product List',
          name: 'products',
          widget: 'list',
          fields: [
            { label: 'ID', name: 'id', widget: 'string', required: false },
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Price', name: 'price', widget: 'string' },
            { label: 'Unit', name: 'unit', widget: 'string', default: 'each' },
            { label: 'Available', name: 'available', widget: 'boolean', default: true },
            { 
              label: 'Category', 
              name: 'category', 
              widget: 'select',
              options: ['vegetables', 'fruits', 'dairy', 'pantry', 'flowers', 'other']
            },
            { label: 'Description', name: 'description', widget: 'text', required: false },
            { label: 'Seasonal', name: 'seasonal', widget: 'boolean', default: false },
            { label: 'Image', name: 'image', widget: 'image', required: false }
          ]
        },
        { label: 'Seasonal Note', name: 'seasonalNote', widget: 'text', required: false },
        { label: 'Last Updated', name: 'lastUpdated', widget: 'hidden' },
        { label: 'Update Source', name: 'updateSource', widget: 'hidden', default: 'cms' }
      ]
    },
    
    // Hours
    {
      name: 'hours',
      label: 'Business Hours',
      files: [
        {
          name: 'hours',
          label: 'Hours',
          file: 'src/content/hours.json',
          fields: [
            {
              label: 'Regular Hours',
              name: 'regular',
              widget: 'object',
              fields: [
                {
                  label: 'Monday',
                  name: 'monday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Tuesday',
                  name: 'tuesday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Wednesday',
                  name: 'wednesday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Thursday',
                  name: 'thursday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Friday',
                  name: 'friday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Saturday',
                  name: 'saturday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                },
                {
                  label: 'Sunday',
                  name: 'sunday',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string' },
                    { label: 'Close', name: 'close', widget: 'string' },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                }
              ]
            },
            {
              label: 'Special Hours / Exceptions',
              name: 'exceptions',
              widget: 'list',
              fields: [
                { label: 'Date', name: 'date', widget: 'date' },
                { label: 'Reason', name: 'reason', widget: 'string' },
                {
                  label: 'Hours',
                  name: 'hours',
                  widget: 'object',
                  fields: [
                    { label: 'Open', name: 'open', widget: 'string', required: false },
                    { label: 'Close', name: 'close', widget: 'string', required: false },
                    { label: 'Closed', name: 'closed', widget: 'boolean', required: false }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    
    // Announcements
    {
      name: 'announcements',
      label: 'Announcements',
      files: [
        {
          name: 'announcement',
          label: 'Current Announcement',
          file: 'src/content/announcements.json',
          fields: [
            { label: 'Active', name: 'active', widget: 'boolean', default: true },
            { label: 'Message', name: 'message', widget: 'string' },
            { 
              label: 'Type', 
              name: 'type', 
              widget: 'select',
              options: ['info', 'warning', 'urgent']
            },
            { label: 'Expires At', name: 'expiresAt', widget: 'datetime' },
            { label: 'ID', name: 'id', widget: 'hidden' }
          ]
        }
      ]
    },
    
    // Farm Information
    {
      name: 'farmInfo',
      label: 'Farm Information',
      files: [
        {
          name: 'info',
          label: 'Basic Information',
          file: 'src/content/farm-info.json',
          fields: [
            { label: 'Farm Name', name: 'name', widget: 'string' },
            { label: 'Established Year', name: 'established', widget: 'number' },
            { label: 'Owners', name: 'owners', widget: 'string' },
            { label: 'Total Acres', name: 'acres', widget: 'number' },
            {
              label: 'Location',
              name: 'location',
              widget: 'object',
              fields: [
                { label: 'Address', name: 'address', widget: 'string' },
                { label: 'City', name: 'city', widget: 'string' },
                { label: 'State', name: 'state', widget: 'string' },
                { label: 'ZIP', name: 'zip', widget: 'string' },
                { label: 'County', name: 'county', widget: 'string' }
              ]
            },
            {
              label: 'Contact',
              name: 'contact',
              widget: 'object',
              fields: [
                { label: 'Phone', name: 'phone', widget: 'string' },
                { label: 'Email', name: 'email', widget: 'string' },
                { label: 'Website', name: 'website', widget: 'string' }
              ]
            },
            {
              label: 'Specialties',
              name: 'specialties',
              widget: 'list',
              field: { label: 'Specialty', name: 'specialty', widget: 'string' }
            },
            {
              label: 'Awards',
              name: 'awards',
              widget: 'list',
              fields: [
                { label: 'Year', name: 'year', widget: 'string' },
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Organization', name: 'organization', widget: 'string' }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Export for module usage
export default config;

// Also make it available globally for non-module usage
if (typeof window !== 'undefined') {
  window.CMS_CONFIG = config;
}
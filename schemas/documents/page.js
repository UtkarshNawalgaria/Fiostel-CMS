export default {
    title: "Pages",
    name: 'page',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: "Page SEO",
            name: 'pageSEO',
            type: 'seo'
        },
        {
            title: "Keywords",
            name: "keywords",
            type: "array",
            description: "Keywords for Page SEO",
            of: [{type: "string"}],
            options: {
                layout: "tags",
                isHighlighted: true
            }
        }
    ]
}
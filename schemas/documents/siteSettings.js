export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text'
        },
        {
            name: 'logo',
            title: "Website Logo",
            type: "newImage"
        }
    ]
}
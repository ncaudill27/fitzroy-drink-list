export default {
  name: 'ingredient',
  type: 'object',
  title: 'Ingredient',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'amount',
      type: 'string',
      title: 'Amount',
      description: 'Use fractions not decimals with one space if needed. e.g. "2 1/2"',
      validation: Rule => Rule.regex(/\./, {invert: true}).error('Use fractions instead of decimals.')
    },
    {
      name: 'measurement',
      type: 'string',
      title: 'Measurement',
      options: {
        list: [
          {title: 'Ounces', value: 'ounces'},
          {title: 'Dashes', value: 'dashes'},
          {title: 'Slices', value: 'slices'},
          {title: 'Leaves', value: 'leaves'}
        ]
      }
    }
  ]
}
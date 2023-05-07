export const getCategoryName = (category) => {
  switch (category?.toLocaleLowerCase()) {
    case 'attractions':
      return '🎡 Attractions'
    case 'food':
      return '🍖 Food'
    case 'gaming':
      return '🎮 Gaming'
    case 'interaction':
      return '🌝 Interaction'
    case 'sport':
      return '⚽️ Sport'
    default:
      return category
  }
}

export const getColourClass = (category) => {
  switch (category?.toLocaleLowerCase()) {
    case 'attractions':
      return 'bg-red-50 text-red-700 ring-red-700/10'
    case 'food':
      return 'bg-yellow-50 text-yellow-700 ring-yellow-700/10'
    case 'gaming':
      return 'bg-green-50 text-green-700 ring-green-700/10'
    case 'interaction':
      return 'bg-blue-50 text-blue-700 ring-blue-700/10'
    case 'sport':
      return 'bg-indigo-50 text-indigo-700 ring-indigo-700/10'
    default:
      return 'bg-gray-50 text-gray-700 ring-gray-700/10'
  }
}

export const getLabelForActivityAttribute = (attr) => {
  switch (attr) {
    case 'distanceFromIras':
      return 'Distance from IRAS'
    case 'rating':
      return 'Rating'
    case 'minParticipants':
      return 'Min. Participants'
    case 'maxParticipants':
      return 'Max. Participants'
    case 'averageCost':
      return 'Average Cost'

    case 'location':
      return 'Location Name'
    case 'activity':
      return 'Activity Name'
    case 'category':
      return 'Category Name'
    default:
      return ''
  }
}

export const openWindow = (url) => {
  window.open(url)
}

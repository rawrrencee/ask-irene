export const STORE_KEY_ANSWERS = 'pinia.state.answers'

export const PAGES = {
  LANDING: 'landing',
  LOGIN: 'login',
  QUESTIONS: 'questions',
  RESULTS: 'results'
}

export const QUESTIONS_PAGES = {
  BUDGET: 'budget',
  CATEGORY: 'category',
  DISTANCE: 'distance',
  SIZE: 'size',
  SUMMARY: 'summary'
}

export const ACTIVITIES = [
  {
    id: 1,
    location: 'Nara Japanese Restaurant',
    activity: 'Japanese',
    category: 'Food',
    tags: 'Ramen',
    rating: 3.5,
    minParticipants: 1,
    maxParticipants: 48,
    averageCost: 30,
    address: '167 Thomson Rd, Singapore 307619',
    distanceFromIras: 1.5,
    googleMapsUrl: 'https://goo.gl/maps/UHfDjAsUiDVfzmxT6?coh=178572&entry=tt',
    reservationUrl: 'https://www.quandoo.sg/place/nara-japanese-9466?aid=63'
  },
  {
    id: 2,
    location: 'Umi Nami',
    activity: 'Japanese',
    category: 'Food',
    tags: 'Beer, Sashimi',
    rating: 4,
    minParticipants: 1,
    maxParticipants: 48,
    averageCost: 30,
    address: '8 Lor Mambong, Singapore 277674',
    distanceFromIras: 6.5,
    googleMapsUrl: 'https://goo.gl/maps/9qhE7K3JGJMtGsVL9?coh=178572&entry=tt',
    reservationUrl: ''
  },
  {
    id: 3,
    location: 'BFF Climb Bendemeer',
    activity: 'Bouldering',
    category: 'Sport',
    tags: 'High Wall, Bouldering, Auto Belay',
    rating: 5,
    minParticipants: 1,
    maxParticipants: 200,
    averageCost: 20,
    address: '2 Kallang Ave, #01-20 CT Hub @ Kallang, Singapore 339407',
    distanceFromIras: 4,
    googleMapsUrl: 'https://goo.gl/maps/4XNKzdBkBYehbzsZ9?coh=178572&entry=tt',
    reservationUrl: ''
  },
  {
    id: 4,
    location: 'Climb Central Novena',
    activity: 'Bouldering',
    category: 'Sport',
    tags: 'High Wall, Bouldering, Auto Belay',
    rating: 4,
    minParticipants: 1,
    maxParticipants: 30,
    averageCost: 20,
    address: '238 Thomson Rd, #03-23/25, Singapore 307683',
    distanceFromIras: 1.5,
    googleMapsUrl: 'https://goo.gl/maps/myy2Jvqm49cvrYMU7?coh=178572&entry=tt',
    reservationUrl: ''
  },
  {
    id: 5,
    location: 'Climb Central Sports Hub',
    activity: 'Bouldering',
    category: 'Sport',
    tags: 'High Wall, Bouldering, Auto Belay',
    rating: 4,
    minParticipants: 1,
    maxParticipants: 150,
    averageCost: 20,
    address: '#B1-01 Kallang Wave Mall, 1 Stadium Place, 397628',
    distanceFromIras: 6,
    googleMapsUrl: 'https://goo.gl/maps/97XQRdhvKZyAsXWz8?coh=178572&entry=tt',
    reservationUrl: ''
  },
  {
    id: 6,
    location: 'HomeTeamNS Laser Quest Bukit Batok',
    activity: 'Laser Tag',
    category: 'Sport',
    tags: '',
    rating: 4,
    minParticipants: 1,
    maxParticipants: 30,
    averageCost: 30,
    address: '2 Bukit Batok West Ave 7, Singapore 659003',
    distanceFromIras: 16,
    googleMapsUrl: 'https://goo.gl/maps/Gw93SQbna96S8L8G7?coh=178572&entry=tt',
    reservationUrl:
      'https://onehome-facilities-portal.hometeamns.sg/booking/main/facility/37c5bf38-afc0-498b-a183-b1c2495d6343'
  },
  {
    id: 7,
    location: 'Revenue House MPH',
    activity: 'Badminton',
    category: 'Sport',
    tags: 'Racket Sports',
    rating: 3.8,
    minParticipants: 2,
    maxParticipants: 16,
    averageCost: 8,
    address: '55 Newton Road Revenue House Level 5 MPH Singapore 307987 ',
    distanceFromIras: 0,
    googleMapsUrl: '',
    reservationUrl: ''
  },
  {
    id: 8,
    location: 'Revenue House',
    activity: 'Jogging/ Running',
    category: 'Sport',
    tags: '',
    rating: 3.9,
    minParticipants: 1,
    maxParticipants: 2500,
    averageCost: 0,
    address: '55 Newton Road Revenue House Singapore 307987 ',
    distanceFromIras: 0,
    googleMapsUrl: '',
    reservationUrl: ''
  },
  {
    id: 9,
    location: 'Xpidemix',
    activity: 'Board Games',
    category: 'Gaming',
    tags: 'Board Games',
    rating: 4.6,
    minParticipants: 2,
    maxParticipants: 24,
    averageCost: 5,
    address: '#01-03 63 E Coast Rd, Singapore 428776',
    distanceFromIras: 10,
    googleMapsUrl:
      'https://www.google.com/maps/place/XPIDEMIX/@1.3052289,103.9009983,17z/data=!3m1!4b1!4m6!3m5!1s0x31da187287bc654b:0x520f81f62d194cf9!8m2!3d1.3052235!4d103.9035786!16s%2Fg%2F11dzt19nhz',
    reservationUrl: ''
  },
  {
    id: 10,
    location: 'Planet Bowl',
    activity: 'Bowling',
    category: 'Sport',
    tags: 'Bowling',
    rating: 4.1,
    minParticipants: 1,
    maxParticipants: 80,
    averageCost: 40,
    address: '60 Tessensohn Rd, Singapore 217664',
    distanceFromIras: 3,
    googleMapsUrl:
      'https://www.google.com/maps/place/Planet+Bowl/@1.3157761,103.8532165,17z/data=!3m2!4b1!5s0x31da19c0916c5667:0x15d60905dd8bb3b6!4m6!3m5!1s0x31da19c565d4a079:0xa7ec26854e61a0fa!8m2!3d1.3157707!4d103.8557968!16s%2Fg%2F11byxfbq_7',
    reservationUrl: 'https://secure.meriq.com/planetbowl/'
  },
  {
    id: 11,
    location: 'MacRitchie Reservoir',
    activity: 'Hiking',
    category: 'Sport',
    tags: 'Hiking',
    rating: 4.7,
    minParticipants: 1,
    maxParticipants: 500,
    averageCost: 0,
    address: 'Lornie Rd, Singapore 298735',
    distanceFromIras: 5,
    googleMapsUrl: 'https://goo.gl/maps/RHH3WghP8yNym7hP7',
    reservationUrl: ''
  },
  {
    id: 12,
    location: 'LOST SG Escape Room Singapore',
    activity: 'Escape Room',
    category: 'Interaction',
    tags: 'Escape',
    rating: 4.6,
    minParticipants: 2,
    maxParticipants: 30,
    averageCost: 30,
    address: '1 Sophia Rd, #03-01/02/03 Peace Centre, Singapore 228149',
    distanceFromIras: 5,
    googleMapsUrl: 'https://goo.gl/maps/9GMinqYozzPbgRfH8',
    reservationUrl: ''
  },
  {
    id: 13,
    location: 'Forest Adventure',
    activity: 'High Ropes',
    category: 'Sport',
    tags: 'High Ropes, Team Building, Adventure',
    rating: 4.4,
    minParticipants: 4,
    maxParticipants: 50,
    averageCost: 50,
    address: 'Bedok Reservoir Park, Singapore 479244',
    distanceFromIras: 15,
    googleMapsUrl: 'https://goo.gl/maps/dBrnb6zpg57CYF9N6',
    reservationUrl: ''
  },
  {
    id: 14,
    location: 'The Fun Empire',
    activity: 'Games',
    category: 'Sport',
    tags: 'Team Building, Games',
    rating: 4.9,
    minParticipants: 5,
    maxParticipants: 40,
    averageCost: 25,
    address: '5B Guillemard Rd, Level 3 Wing Fong Building, Singapore 399685',
    distanceFromIras: 7,
    googleMapsUrl: 'https://goo.gl/maps/SztEmAWBNY3W627w9',
    reservationUrl: 'https://www.funempire.com/sg/'
  },
  {
    id: 15,
    location: 'Trapped Escape Room',
    activity: 'Escape Room',
    category: 'Interaction',
    tags: 'Escape Room, Team Building, Puzzle',
    rating: 4.8,
    minParticipants: 2,
    maxParticipants: 48,
    averageCost: 25,
    address: '2 Handy Rd, B1-09, Singapore 229233',
    distanceFromIras: 5,
    googleMapsUrl: 'https://goo.gl/maps/18DjuPVB5hsgejYq9',
    reservationUrl: ''
  },
  {
    id: 16,
    location: 'Virtual Room Singapore',
    activity: 'Virtual Reality',
    category: 'Gaming',
    tags: 'Virtual Reality, Team Building, Puzzle',
    rating: 4.9,
    minParticipants: 2,
    maxParticipants: 40,
    averageCost: 35,
    address: '211 New Bridge Rd, Level B3 Lucky Chinatown, Singapore 059432',
    distanceFromIras: 7,
    googleMapsUrl: 'https://goo.gl/maps/brqm4B4HuVjvrKRi7',
    reservationUrl: ''
  },
  {
    id: 17,
    location: 'The Fragment Room',
    activity: 'Anger Room',
    category: 'Interaction',
    tags: 'Team Building, Stress Relief',
    rating: 4.7,
    minParticipants: 1,
    maxParticipants: 30,
    averageCost: 40,
    address: '490 MacPherson Rd, Singapore 368198',
    distanceFromIras: 7,
    googleMapsUrl: 'https://goo.gl/maps/ootXkVFTceafzJzf6',
    reservationUrl: ''
  },
  {
    id: 18,
    location: 'The Rink',
    activity: 'Ice Skating',
    category: 'Sport',
    tags: 'Ice Skating, Team Building, Fun',
    rating: 4.2,
    minParticipants: 1,
    maxParticipants: 200,
    averageCost: 20,
    address: '2 Jurong East Central 1, #03-11 JCube, Singapore 609731',
    distanceFromIras: 15,
    googleMapsUrl: 'https://goo.gl/maps/QFCYv2drGhJCVFKW7',
    reservationUrl: ''
  },
  {
    id: 19,
    location: 'Singapore Wake Park',
    activity: 'Wakeboarding',
    category: 'Sport',
    tags: 'Wakeboarding, Team Building, Adventure',
    rating: 4.4,
    minParticipants: 4,
    maxParticipants: 50,
    averageCost: 40,
    address: '1206A ECP, Singapore 449891',
    distanceFromIras: 17,
    googleMapsUrl: 'https://goo.gl/maps/rcgfc9UPfNvc5d8L9',
    reservationUrl: ''
  },
  {
    id: 20,
    location: 'The Karting Arena @ Jurong',
    activity: 'Go-Karting',
    category: 'Sport',
    tags: 'Team Building, Fun',
    rating: 4.6,
    minParticipants: 6,
    maxParticipants: 200,
    averageCost: 60,
    address: '511 Upper Jurong Rd, Block B, Singapore 638366',
    distanceFromIras: 25,
    googleMapsUrl: 'https://goo.gl/maps/GKRSbhfDkLsp571K6',
    reservationUrl: ''
  },
  {
    id: 21,
    location: 'Laser Quest Singapore',
    activity: 'Laser Tag',
    category: 'Sport',
    tags: 'Laser Tag, Team Building, Games',
    rating: 4.4,
    minParticipants: 10,
    maxParticipants: 60,
    averageCost: 20,
    address: '2 Bukit Batok West Ave 7, Singapore 659003',
    distanceFromIras: 15,
    googleMapsUrl: 'https://goo.gl/maps/LDNsYjAt4KF7Y7vs5',
    reservationUrl: 'https://www.hometeamns.sg/bukitbatok/laserquest/'
  },
  {
    id: 22,
    location: 'Mega Adventure Park',
    activity: 'Zip Line',
    category: 'Sport',
    tags: 'Zip Line, Team Building, Adventure',
    rating: 4.5,
    minParticipants: 1,
    maxParticipants: 100,
    averageCost: 50,
    address: '10A Siloso Beach Walk, Sentosa Island, Singapore 099008',
    distanceFromIras: 14,
    googleMapsUrl: 'https://goo.gl/maps/3YBy8GzUxhuDiSaq5',
    reservationUrl: 'https://www.sg.megaadventure.com/'
  },
  {
    id: 23,
    location: 'Gallop Stable',
    activity: 'Horse Riding',
    category: 'Sport',
    tags: 'Horse Riding, Team Building, Nature',
    rating: 3.7,
    minParticipants: 4,
    maxParticipants: 50,
    averageCost: 80,
    address: '100 Turf Club Road, 287992',
    distanceFromIras: 8,
    googleMapsUrl: 'https://goo.gl/maps/kL9D7R8BsyMSbqiZA',
    reservationUrl: 'http://gallopstable.com/'
  },
  {
    id: 24,
    location: 'Bounce Singapore',
    activity: 'Trampoline Park',
    category: 'Sport',
    tags: 'Trampoline Park, Team Building, Fun',
    rating: 4.3,
    minParticipants: 10,
    maxParticipants: 250,
    averageCost: 25,
    address: '8 Grange Rd, #09-01 Cineleisure, Singapore 239695',
    distanceFromIras: 4,
    googleMapsUrl: 'https://goo.gl/maps/gkVCDvDPc3HWnDGA7',
    reservationUrl: 'http://www.bounceinc.com.sg/'
  },
  {
    id: 25,
    location: 'Universal Studios Singapore',
    activity: 'Theme Park',
    category: 'Attractions',
    tags: 'Theme Park, Rides, Family',
    rating: 4.5,
    minParticipants: 1,
    maxParticipants: 999,
    averageCost: 79,
    address: '8 Sentosa Gateway, Singapore 098269',
    distanceFromIras: 12,
    googleMapsUrl: 'https://goo.gl/maps/N3xSwz3Ua2MMjgpJ8',
    reservationUrl: 'https://www.rwsentosa.com/en/attractions/universal-studios-singapore/explore'
  },
  {
    id: 26,
    location: 'Gardens by the Bay',
    activity: 'Gardens',
    category: 'Attractions',
    tags: 'Gardens, Nature, Family',
    rating: 4.6,
    minParticipants: 1,
    maxParticipants: 999,
    averageCost: 28,
    address: '18 Marina Gardens Dr, Singapore 018953',
    distanceFromIras: 7,
    googleMapsUrl: 'https://goo.gl/maps/hSQbFnHMxGwW5rUS8',
    reservationUrl: 'https://www.gardensbythebay.com.sg/'
  },
  {
    id: 27,
    location: 'Two Men Bagel House Novena',
    activity: 'Fusion',
    category: 'Food',
    tags: 'Bagel',
    rating: 4.5,
    minParticipants: 1,
    maxParticipants: 999,
    averageCost: 20,
    address: '103 Irrawaddy Rd, #01-04 Royal Square, Singapore 329566',
    distanceFromIras: 1,
    googleMapsUrl: 'https://goo.gl/maps/7sXRRrHvezhVS8L2A',
    reservationUrl: 'http://www.twomenbagels.com/'
  },
  {
    id: 28,
    location: 'Omoté Novena',
    activity: 'Japanese',
    category: 'Food',
    tags: 'Sashimi, Chirashi Don',
    rating: 4,
    minParticipants: 1,
    maxParticipants: 40,
    averageCost: 25,
    address: '238 Thomson Rd, #03-09/10 Velocity @ Novena Square, Singapore 307683',
    distanceFromIras: 1,
    googleMapsUrl: 'https://goo.gl/maps/cwQzVHA9cun7yeD27',
    reservationUrl: ''
  },
  {
    id: 29,
    location: 'Monster Curry - Novena Square',
    activity: 'Japanese',
    category: 'Food',
    tags: 'Curry',
    rating: 4.6,
    minParticipants: 1,
    maxParticipants: 20,
    averageCost: 20,
    address: '238 Thomson Rd, #02-78/79, Singapore 307683',
    distanceFromIras: 1,
    googleMapsUrl: 'https://goo.gl/maps/Biufp3koeiyrCLkU8',
    reservationUrl: ''
  }
]

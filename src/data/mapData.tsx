const Image = [
  {image: require('../assets/banners/projet1.jpg')},
  {image: require('../assets/banners/projet2.jpg')},
  {image: require('../assets/banners/projet3.jpg')},
  {image: require('../assets/banners/projet4.jpeg')},
  {image: require('../assets/banners/projet5.jpg')},
];

export const markers = [
  {
    coordinate: {
      latitude: 13.5013810203,
      longitude: 2.11620922479,
    },
    numero: '001',
    nom: 'Projet 1',
    type: 'Type 1',
    dateExec: '15/11/2021',
    image: Image[0].image,
  },
  {
    coordinate: {
      latitude: 13.4998532,
      longitude: 2.137161,
    },
    numero: '002',
    nom: 'Projet 2',
    type: 'Type 1',
    dateExec: '21/11/2021',
    image: Image[1].image,
  },
  {
    coordinate: {
      latitude: 13.5053197,
      longitude: 2.117377,
    },
    numero: '003',
    nom: 'Projet 3',
    type: 'Type 1',
    dateExec: '21/11/2021',
    image: Image[2].image,
  },
  {
    coordinate: {
      latitude: 13.5124939,
      longitude: 2.103659,
    },
    numero: '004',
    nom: 'Projet 4',
    type: 'Type 2',
    dateExec: '21/11/2021',
    image: Image[3].image,
  },
  {
    coordinate: {
      latitude: 13.5157205,
      longitude: 2.1009619,
    },
    numero: '005',
    nom: 'Projet 5',
    type: 'Type 1',
    dateExec: '21/11/2021',
    image: Image[4].image,
  },

  {
    coordinate: {
      latitude: 13.5227097,
      longitude: 2.11433,
    },
    numero: '003',
    nom: 'Projet 3',
    type: 'Type 2',
    dateExec: '05/12/2021',
    image: Image[2].image,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export interface PlaceLink {
  type: string;
  url: string;
  latitude?: number;
  longitude?: number;
}

export interface Place {
  name: string;
  location: string;
  description: string;
  contact?: string;
  links?: PlaceLink[];
  latitude?: number;
  longitude?: number;
}

export interface Emotion {
  name: string;
  color: string;
  places: Place[];
}

export const placesData: Emotion[] = [
  {
    name: 'Feliz',
    color: '#FFF9C4',
    places: [
      {
        name: 'Café St. Honoré',
        location: 'San José Centro',
        description: 'Ambiente elegante ideal para celebrar con repostería francesa.',
        contact: '+506 2275 0000',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'website', url: 'https://www.biocorredores.org/' },
          { type: 'facebook', url: 'https://www.facebook.com/' },
          { type: 'rome2rio', url: 'https://www.rome2rio.com/' }
        ],
        latitude: 9.94345,
        longitude: -84.1155
      },
      {
        name: 'Café Miel',
        location: 'Sabana Norte, San José',
        description: 'Luminoso y acogedor, perfecto para compartir un momento dulce.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ],
        latitude: 9.954,
        longitude: -84.105
      },
      {
        name: 'Lúcida Cafetería',
        location: 'Rohrmoser, San José',
        description: 'Café artesanal, ambiente creativo y fotografías estéticas.',
        contact: '+506 8988 6776',
        links: [],
        latitude: 9.941,
        longitude: -84.114
      },
      {
        name: 'Parque La Libertad',
        location: 'Fátima de Desamparados, La Unión',
        description: 'Ideal para un picnic o paseo alegre al aire libre.',
        contact: '+506 2274 9400',
        links: [
          { type: 'website', url: 'https://www.mcj.go.cr/' },
          { type: 'website', url: 'https://www.pasteleriasanjose.com/' },
          { type: 'website', url: 'https://www.biocorredores.org/' },
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ],
        latitude: 9.933,
        longitude: -84.06
      },
      {
        name: 'Hyatt Centric Spa',
        location: 'Escazú',
        description: 'Relax con vistas y servicios de bienestar en un ambiente lujoso.',
        contact: '+506 2207 1234',
        links: [
          { type: 'facebook', url: 'https://www.facebook.com/' },
          { type: 'hyatt', url: 'https://www.hyatt.com/' },
          { type: 'ihg', url: 'https://www.ihg.com/' }
        ],
        latitude: 9.919,
        longitude: -84.139
      }
    ]
  },
  {
    name: 'Triste',
    color: '#DCD7F9',
    places: [
      {
        name: 'Parque Ecológico Simón Bolívar',
        location: 'San José',
        description: 'Espacio verde donde reconectar con calma.',
        links: [
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.9401,
        longitude: -84.0713
      },
      {
        name: 'Parque Natural Urbano Lorne Ross',
        location: 'Santa Ana',
        description: 'Sendas para sanar en silencio.',
        links: [
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.9384,
        longitude: -84.1972
      },
      {
        name: 'Parque del Este',
        location: 'Montes de Oca',
        description: 'Ideal para contemplar y meditar entre árboles.',
        links: [
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'website', url: 'https://www.ihg.com/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.9361,
        longitude: -84.0198
      },
      {
        name: 'Centro Cultural GAM',
        location: 'San José Centro',
        description: 'Exposiciones, música, silencio artístico.',
        links: [
          { type: 'instagram', url: 'https://www.instagram.com/' },
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ],
        latitude: 9.9320,
        longitude: -84.0560
      }
    ]
  },
  {
    name: 'Ansioso',
    color: '#D2F5E3',
    places: [
      {
        name: 'Talleres de meditación GAM Cultural',
        location: 'Escazú',
        description: 'Técnicas para calmar la mente.',
        contact: '7021 6907 / 8819 9919',
        links: [
          { type: 'website', url: 'https://www.visitcostarica.com/' },
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ],
        latitude: 9.8630,
        longitude: -83.9190
      },
      {
        name: 'Parque Simón Bolívar',
        location: 'San José',
        description: 'Naturaleza urbana para grounding.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.9320,
        longitude: -84.0560
      },
      {
        name: 'Lorne Ross',
        location: 'Santa Ana',
        description: 'Humedales y calma.',
        links: [
          { type: 'website', url: 'https://www.tevucr.org/' }
        ],
        latitude: 9.9080,
        longitude: -84.1460
      },
      {
        name: 'Café St. Honoré',
        location: 'San José Centro',
        description: 'Lugar tranquilo, luz suave.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ],
        latitude: 9.9520,
        longitude: -84.0560
      },
      {
        name: 'Parque del Este',
        location: 'Montes de Oca',
        description: 'Sitio para caminar sin prisas.',
        links: [
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.9330,
        longitude: -84.0500
      }
    ]
  },
  {
    name: 'Estresado',
    color: '#D7E1F2',
    places: [
      {
        name: 'Reserva Bosque Nuboso Monteverde',
        location: 'Monteverde',
        description: 'Senderismo y naturaleza para desconectar.',
        contact: '+506 2645 5122',
        links: [
          { type: 'website', url: 'https://www.facebook.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' },
          { type: 'website', url: 'https://www.cloudforestmonteverde.com/' }
        ],
        latitude: 10.30345,
        longitude: -84.78771
      },
      {
        name: 'Parque Nacional Braulio Carrillo',
        location: 'Quebrada González',
        description: 'Espacio verde y senderos señalizados.',
        links: [
          { type: 'website', url: 'https://www.getyourguide.com/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 10.0500,
        longitude: -84.0700
      },
      {
        name: 'Carpintera Hills',
        location: 'Curridabat',
        description: 'Aventura en selva a 20 min de SJ.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ],
        latitude: 9.9180,
        longitude: -84.0350
      },
      {
        name: 'Bosque Mágico de Prusia',
        location: 'Heredia',
        description: 'Es un bosque de pinos y cipreses conocido por su ambiente mágico y sus senderos pintorescos.',
        links: [
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ],
        latitude: 9.9800,
        longitude: -84.1200
      },
      {
        name: 'Peace Lodge / La Paz Waterfall Gardens',
        location: 'Vara Blanca',
        description: 'En GAM caso, relajación y cascadas.',
        links: [
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 10.0100,
        longitude: -84.0200
      }
    ]
  },
  {
    name: 'Enojado',
    color: '#FFD6D6',
    places: [
      {
        name: 'Presence Spa',
        location: 'InterContinental Escazú',
        description: 'Masajes y spa extensivo para liberar la tensión.',
        contact: '1 877 834 3613',
        links: [
          { type: 'biocorredores', url: 'https://www.biocorredores.org/' },
          { type: 'ihg', url: 'https://www.ihg.com/' },
          { type: 'facebook', url: 'https://www.facebook.com/' }
        ],
        latitude: 9.919,
        longitude: -84.139
      },
      {
        name: 'Casa El Dorado Spa',
        location: 'Escazú',
        description: 'Tranquilidad, montaña y tratamientos anti estrés.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ],
        latitude: 9.92,
        longitude: -84.138
      },
      {
        name: 'AC Hotel Spa',
        location: 'Escazú',
        description: 'Instalaciones modernas para desconectarte.',
        contact: '+506 2588 4500',
        links: [
          { type: 'rome2rio', url: 'https://www.rome2rio.com/' },
          { type: 'marriott', url: 'https://www.marriott.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ],
        latitude: 9.9195,
        longitude: -84.1375
      },
      {
        name: 'Metamorfosis Wellness Center',
        location: 'Escazú',
        description: 'Centro de terapias alternativas para liberar ira.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ],
        latitude: 9.918,
        longitude: -84.136
      },
      {
        name: 'Desestress Spa',
        location: 'Escazú',
        description: 'Sesiones cortas enfocadas en relajación rápida.',
        links: [
          { type: 'website', url: 'https://www.visitcostarica.com/' },
          { type: 'gamcultural', url: 'https://www.gamcultural.com/' },
          { type: 'hyatt', url: 'https://www.hyatt.com/' },
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'yelp', url: 'https://www.yelp.com/' }
        ],
        latitude: 9.9185,
        longitude: -84.1385
      }
    ]
  },
  {
    name: 'Preocupado',
    color: '#E3E4FA',
    places: [
      {
        name: 'Taller "Meditación & Respiración"',
        location: 'GAM Cultural, Escazú',
        description: 'Técnicas para calmar la mente.',
        contact: '7021 6907',
        links: [
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ],
        latitude: 9.9190,
        longitude: -84.1390
      },
      {
        name: 'Centro Campo Verde',
        location: 'Taller de Meditación, Escazú',
        description: 'Guiado, práctico y relajante.',
        contact: '8819 9919',
        links: [
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ],
        latitude: 9.9185,
        longitude: -84.1380
      },
      {
        name: 'Yoga-Meditación GAM Cultural',
        location: 'Escazú',
        description: 'Info vía web GAM, teléfono arriba.',
        links: [
          { type: 'biocorredores', url: 'https://www.biocorredores.org/' },
          { type: 'website', url: 'https://www.gamcultural.com/' },
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ],
        latitude: 9.8630,
        longitude: -83.9190
      }
    ]
  }
];

export interface PlaceLink {
  type: string;
  url: string;
}

export interface Place {
  name: string;
  location: string;
  description: string;
  contact?: string;
  links?: PlaceLink[];
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
        ]
      },
      {
        name: 'Café Miel',
        location: 'Sabana Norte, San José',
        description: 'Luminoso y acogedor, perfecto para compartir un momento dulce.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ]
      },
      {
        name: 'Lúcida Cafetería',
        location: 'Rohrmoser, San José',
        description: 'Café artesanal, ambiente creativo y fotografías estéticas.',
        contact: '+506 8988 6776',
        links: []
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
        ]
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
        ]
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
        ]
      },
      {
        name: 'Parque Natural Urbano Lorne Ross',
        location: 'Santa Ana',
        description: 'Sendas para sanar en silencio.',
        links: [
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
      },
      {
        name: 'Parque del Este',
        location: 'Montes de Oca',
        description: 'Ideal para contemplar y meditar entre árboles.',
        links: [
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'website', url: 'https://www.ihg.com/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
      },
      {
        name: 'Centro Cultural GAM',
        location: 'San José Centro',
        description: 'Exposiciones, música, silencio artístico.',
        links: [
          { type: 'instagram', url: 'https://www.instagram.com/' },
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ]
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
        ]
      },
      {
        name: 'Parque Simón Bolívar',
        location: 'San José',
        description: 'Naturaleza urbana para grounding.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.tevucr.org/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
      },
      {
        name: 'Lorne Ross',
        location: 'Santa Ana',
        description: 'Humedales y calma.',
        links: [
          { type: 'website', url: 'https://www.tevucr.org/' }
        ]
      },
      {
        name: 'Café St. Honoré',
        location: 'San José Centro',
        description: 'Lugar tranquilo, luz suave.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ]
      },
      {
        name: 'Parque del Este',
        location: 'Montes de Oca',
        description: 'Sitio para caminar sin prisas.',
        links: [
          { type: 'website', url: 'https://www.gam.cl/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
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
        ]
      },
      {
        name: 'Parque Nacional Braulio Carrillo',
        location: 'Quebrada González',
        description: 'Espacio verde y senderos señalizados.',
        links: [
          { type: 'website', url: 'https://www.getyourguide.com/' },
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
      },
      {
        name: 'Carpintera Hills',
        location: 'Curridabat',
        description: 'Aventura en selva a 20 min de SJ.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ]
      },
      {
        name: 'Bosque Mágico de Prusia',
        location: 'Heredia',
        description: 'Info en VisitCostaRica, ₡1 000 entrada.',
        links: [
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ]
      },
      {
        name: 'Peace Lodge / La Paz Waterfall Gardens',
        location: 'Vara Blanca',
        description: 'En GAM caso, relajación y cascadas.',
        links: [
          { type: 'wikipedia', url: 'https://es.wikipedia.org/' }
        ]
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
        ]
      },
      {
        name: 'Casa El Dorado Spa',
        location: 'Escazú',
        description: 'Tranquilidad, montaña y tratamientos anti estrés.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' },
          { type: 'website', url: 'https://www.visitcostarica.com/' }
        ]
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
        ]
      },
      {
        name: 'Metamorfosis Wellness Center',
        location: 'Escazú',
        description: 'Centro de terapias alternativas para liberar ira.',
        links: [
          { type: 'tripadvisor', url: 'https://www.tripadvisor.com/' }
        ]
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
        ]
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
        ]
      },
      {
        name: 'Centro Campo Verde',
        location: 'Taller de Meditación, Escazú',
        description: 'Guiado, práctico y relajante.',
        contact: '8819 9919',
        links: [
          { type: 'website', url: 'https://www.gamcultural.com/' }
        ]
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
        ]
      }
    ]
  }
];

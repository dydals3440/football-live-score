export const data = {
  get: 'fixtures',
  parameters: {
    live: 'all',
  },
  errors: [],
  results: 10,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1011839,
        referee: null,
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 19550,
          name: 'Estadio Los Chirijos',
          city: 'Milagro',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 243,
        name: 'Liga Pro Serie B',
        country: 'Ecuador',
        logo: 'https://media-1.api-sports.io/football/leagues/243.png',
        flag: 'https://media-2.api-sports.io/flags/ec.svg',
        season: 2023,
        round: 'Regular Season - 13',
      },
      teams: {
        home: {
          id: 10111,
          name: '9 de Octubre',
          logo: 'https://media-3.api-sports.io/football/teams/10111.png',
          winner: null,
        },
        away: {
          id: 1980,
          name: 'Manta FC',
          logo: 'https://media-1.api-sports.io/football/teams/1980.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1019328,
        referee: 'Anderson Daronco',
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 46,
          name: 'Estadio Alberto José Armando',
          city: 'Ciudad de Buenos Aires',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 13,
        name: 'CONMEBOL Libertadores',
        country: 'World',
        logo: 'https://media-1.api-sports.io/football/leagues/13.png',
        flag: null,
        season: 2023,
        round: 'Group Stage - 5',
      },
      teams: {
        home: {
          id: 451,
          name: 'Boca Juniors',
          logo: 'https://media-3.api-sports.io/football/teams/451.png',
          winner: null,
        },
        away: {
          id: 2315,
          name: 'Colo Colo',
          logo: 'https://media-1.api-sports.io/football/teams/2315.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 8,
            extra: null,
          },
          team: {
            id: 2315,
            name: 'Colo Colo',
            logo: 'https://media-1.api-sports.io/football/teams/2315.png',
          },
          player: {
            id: 201910,
            name: 'J. Rojas',
          },
          assist: {
            id: 237168,
            name: 'B. Gutierrez',
          },
          type: 'subst',
          detail: 'Substitution 1',
          comments: null,
        },
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 2315,
            name: 'Colo Colo',
            logo: 'https://media-1.api-sports.io/football/teams/2315.png',
          },
          player: {
            id: 6053,
            name: 'A. Bouzat',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: 'Roughing',
        },
      ],
    },
    {
      fixture: {
        id: 1019329,
        referee: 'Bruno Arleu de Araujo',
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 1235,
          name: 'Estadio de la Universidad Nacional San Agustín',
          city: 'Arequipa',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 13,
        name: 'CONMEBOL Libertadores',
        country: 'World',
        logo: 'https://media-1.api-sports.io/football/leagues/13.png',
        flag: null,
        season: 2023,
        round: 'Group Stage - 5',
      },
      teams: {
        home: {
          id: 2554,
          name: 'FBC Melgar',
          logo: 'https://media-2.api-sports.io/football/teams/2554.png',
          winner: true,
        },
        away: {
          id: 444,
          name: 'Patronato',
          logo: 'https://media-3.api-sports.io/football/teams/444.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 2,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 444,
            name: 'Patronato',
            logo: 'https://media-3.api-sports.io/football/teams/444.png',
          },
          player: {
            id: 6462,
            name: 'L. Geminiani',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: 'Holding',
        },
        {
          time: {
            elapsed: 8,
            extra: null,
          },
          team: {
            id: 2554,
            name: 'FBC Melgar',
            logo: 'https://media-1.api-sports.io/football/teams/2554.png',
          },
          player: {
            id: 39644,
            name: 'B. Cuesta',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Penalty',
          comments: null,
        },
        {
          time: {
            elapsed: 13,
            extra: null,
          },
          team: {
            id: 2554,
            name: 'FBC Melgar',
            logo: 'https://media-2.api-sports.io/football/teams/2554.png',
          },
          player: {
            id: 5448,
            name: 'C. Bordacahar',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1019330,
        referee: 'F. Tello',
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 1230,
          name: 'Estadio Alejandro Villanueva',
          city: 'Lima',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 13,
        name: 'CONMEBOL Libertadores',
        country: 'World',
        logo: 'https://media-1.api-sports.io/football/leagues/13.png',
        flag: null,
        season: 2023,
        round: 'Group Stage - 5',
      },
      teams: {
        home: {
          id: 2553,
          name: 'Alianza Lima',
          logo: 'https://media-2.api-sports.io/football/teams/2553.png',
          winner: null,
        },
        away: {
          id: 1062,
          name: 'Atletico-MG',
          logo: 'https://media-2.api-sports.io/football/teams/1062.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1019450,
        referee: 'G. Guerrero',
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 206,
          name: 'Estádio Raimundo Sampaio',
          city: 'Belo Horizonte, Minas Gerais',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 11,
        name: 'CONMEBOL Sudamericana',
        country: 'World',
        logo: 'https://media-1.api-sports.io/football/leagues/11.png',
        flag: null,
        season: 2023,
        round: 'Group Stage - 5',
      },
      teams: {
        home: {
          id: 125,
          name: 'America Mineiro',
          logo: 'https://media-3.api-sports.io/football/teams/125.png',
          winner: null,
        },
        away: {
          id: 1125,
          name: 'Millonarios',
          logo: 'https://media-1.api-sports.io/football/teams/1125.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 6,
            extra: null,
          },
          team: {
            id: 125,
            name: 'America Mineiro',
            logo: 'https://media-1.api-sports.io/football/teams/125.png',
          },
          player: {
            id: 352959,
            name: 'Mateus Henrique',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 1125,
            name: 'Millonarios',
            logo: 'https://media-1.api-sports.io/football/teams/1125.png',
          },
          player: {
            id: null,
            name: 'A. F. Moreno Paz',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1019451,
        referee: 'A. Aragón',
        timezone: 'UTC',
        date: '2023-06-07T00:00:00+00:00',
        timestamp: 1686096000,
        periods: {
          first: 1686096000,
          second: null,
        },
        venue: {
          id: 112,
          name: 'Estadio José Dellagiovanna',
          city: 'San Fernando, Provincia de Buenos Aires',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 15,
        },
      },
      league: {
        id: 11,
        name: 'CONMEBOL Sudamericana',
        country: 'World',
        logo: 'https://media-1.api-sports.io/football/leagues/11.png',
        flag: null,
        season: 2023,
        round: 'Group Stage - 5',
      },
      teams: {
        home: {
          id: 452,
          name: 'Tigre',
          logo: 'https://media-2.api-sports.io/football/teams/452.png',
          winner: null,
        },
        away: {
          id: 2827,
          name: 'Puerto Cabello',
          logo: 'https://media-2.api-sports.io/football/teams/2827.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 12,
            extra: null,
          },
          team: {
            id: 452,
            name: 'Tigre',
            logo: 'https://media-3.api-sports.io/football/teams/452.png',
          },
          player: {
            id: 6147,
            name: 'A. Cardozo',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1012454,
        referee: null,
        timezone: 'UTC',
        date: '2023-06-06T23:00:00+00:00',
        timestamp: 1686092400,
        periods: {
          first: 1686092400,
          second: 1686096000,
        },
        venue: {
          id: 12670,
          name: 'Estádio Eládio de Barros Carvalho',
          city: 'Recife, Pernambuco',
        },
        status: {
          long: 'Second Half',
          short: '2H',
          elapsed: 53,
        },
      },
      league: {
        id: 75,
        name: 'Serie C',
        country: 'Brazil',
        logo: 'https://media-1.api-sports.io/football/leagues/75.png',
        flag: 'https://media-2.api-sports.io/flags/br.svg',
        season: 2023,
        round: 'Regular Season - 7',
      },
      teams: {
        home: {
          id: 755,
          name: 'Nautico Recife',
          logo: 'https://media-3.api-sports.io/football/teams/755.png',
          winner: true,
        },
        away: {
          id: 7814,
          name: 'Volta Redonda',
          logo: 'https://media-2.api-sports.io/football/teams/7814.png',
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 14,
            extra: null,
          },
          team: {
            id: 7814,
            name: 'Volta Redonda',
            logo: 'https://media-2.api-sports.io/football/teams/7814.png',
          },
          player: {
            id: 78044,
            name: 'Henrique Silva',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 31,
            extra: null,
          },
          team: {
            id: 755,
            name: 'Nautico Recife',
            logo: 'https://media-2.api-sports.io/football/teams/755.png',
          },
          player: {
            id: 55177,
            name: 'Denilson',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 34,
            extra: null,
          },
          team: {
            id: 7814,
            name: 'Volta Redonda',
            logo: 'https://media-2.api-sports.io/football/teams/7814.png',
          },
          player: {
            id: 80702,
            name: 'Marcao',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 42,
            extra: null,
          },
          team: {
            id: 755,
            name: 'Nautico Recife',
            logo: 'https://media-1.api-sports.io/football/teams/755.png',
          },
          player: {
            id: 159540,
            name: 'Rennan Siqueira',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 47,
            extra: null,
          },
          team: {
            id: 755,
            name: 'Nautico Recife',
            logo: 'https://media-2.api-sports.io/football/teams/755.png',
          },
          player: {
            id: 32870,
            name: 'Jael',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
        {
          time: {
            elapsed: 48,
            extra: null,
          },
          team: {
            id: 755,
            name: 'Nautico Recife',
            logo: 'https://media-2.api-sports.io/football/teams/755.png',
          },
          player: {
            id: 32870,
            name: 'Jael',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1023166,
        referee: null,
        timezone: 'UTC',
        date: '2023-06-06T23:00:00+00:00',
        timestamp: 1686092400,
        periods: {
          first: 1686092400,
          second: 1686096000,
        },
        venue: {
          id: 5685,
          name: 'Estádio Leonardo Nogueira',
          city: 'Mossoró, Rio Grande do Norte',
        },
        status: {
          long: 'Second Half',
          short: '2H',
          elapsed: 52,
        },
      },
      league: {
        id: 76,
        name: 'Serie D',
        country: 'Brazil',
        logo: 'https://media-2.api-sports.io/football/leagues/76.png',
        flag: 'https://media-1.api-sports.io/flags/br.svg',
        season: 2023,
        round: '1st Phase - 6',
      },
      teams: {
        home: {
          id: 21258,
          name: 'Potiguar RN',
          logo: 'https://media-3.api-sports.io/football/teams/21258.png',
          winner: true,
        },
        away: {
          id: 7864,
          name: 'Sousa',
          logo: 'https://media-1.api-sports.io/football/teams/7864.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 10,
            extra: null,
          },
          team: {
            id: 21258,
            name: 'Potiguar RN',
            logo: 'https://media-3.api-sports.io/football/teams/21258.png',
          },
          player: {
            id: null,
            name: 'Michel Lima',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
        {
          time: {
            elapsed: 17,
            extra: null,
          },
          team: {
            id: 21258,
            name: 'Potiguar RN',
            logo: 'https://media-3.api-sports.io/football/teams/21258.png',
          },
          player: {
            id: null,
            name: 'Lucas Serafini',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Red Card',
          comments: null,
        },
        {
          time: {
            elapsed: 29,
            extra: null,
          },
          team: {
            id: 21258,
            name: 'Potiguar RN',
            logo: 'https://media-1.api-sports.io/football/teams/21258.png',
          },
          player: {
            id: null,
            name: 'Michel Lima',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
        {
          time: {
            elapsed: 43,
            extra: null,
          },
          team: {
            id: 7864,
            name: 'Sousa',
            logo: 'https://media-3.api-sports.io/football/teams/7864.png',
          },
          player: {
            id: null,
            name: 'Arua',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1027249,
        referee: 'M. Mercado',
        timezone: 'UTC',
        date: '2023-06-06T23:00:00+00:00',
        timestamp: 1686092400,
        periods: {
          first: 1686092400,
          second: 1686096000,
        },
        venue: {
          id: 19614,
          name: 'Estadio Raúl Miranda Yumbo',
          city: 'Yumbo',
        },
        status: {
          long: 'Second Half',
          short: '2H',
          elapsed: 56,
        },
      },
      league: {
        id: 240,
        name: 'Primera B',
        country: 'Colombia',
        logo: 'https://media-1.api-sports.io/football/leagues/240.png',
        flag: 'https://media-2.api-sports.io/flags/co.svg',
        season: 2023,
        round: 'Apertura - Quadrangular - 5',
      },
      teams: {
        home: {
          id: 1146,
          name: 'Cortulua',
          logo: 'https://media-1.api-sports.io/football/teams/1146.png',
          winner: null,
        },
        away: {
          id: 1140,
          name: 'Patriotas',
          logo: 'https://media-1.api-sports.io/football/teams/1140.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 2,
            extra: null,
          },
          team: {
            id: 1146,
            name: 'Cortulua',
            logo: 'https://media-2.api-sports.io/football/teams/1146.png',
          },
          player: {
            id: 301370,
            name: 'M. A. Herrera Casseres',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 30,
            extra: null,
          },
          team: {
            id: 1140,
            name: 'Patriotas',
            logo: 'https://media-1.api-sports.io/football/teams/1140.png',
          },
          player: {
            id: 59802,
            name: 'C. De Las Salas',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 37,
            extra: null,
          },
          team: {
            id: 1146,
            name: 'Cortulua',
            logo: 'https://media-2.api-sports.io/football/teams/1146.png',
          },
          player: {
            id: 59461,
            name: 'C. Mosquera',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 40,
            extra: null,
          },
          team: {
            id: 1146,
            name: 'Cortulua',
            logo: 'https://media-3.api-sports.io/football/teams/1146.png',
          },
          player: {
            id: 13395,
            name: 'J. Caicedo',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 41,
            extra: null,
          },
          team: {
            id: 1140,
            name: 'Patriotas',
            logo: 'https://media-2.api-sports.io/football/teams/1140.png',
          },
          player: {
            id: null,
            name: 'A. Alarcon',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 42,
            extra: null,
          },
          team: {
            id: 1146,
            name: 'Cortulua',
            logo: 'https://media-3.api-sports.io/football/teams/1146.png',
          },
          player: {
            id: 64138,
            name: 'B. A. Cundumi Lastre',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1028625,
        referee: null,
        timezone: 'UTC',
        date: '2023-06-06T23:00:00+00:00',
        timestamp: 1686092400,
        periods: {
          first: 1686092400,
          second: 1686096000,
        },
        venue: {
          id: 19229,
          name: 'TQL Stadium',
          city: 'Cincinnati, Ohio',
        },
        status: {
          long: 'Second Half',
          short: '2H',
          elapsed: 52,
        },
      },
      league: {
        id: 257,
        name: 'US Open Cup',
        country: 'USA',
        logo: 'https://media-3.api-sports.io/football/leagues/257.png',
        flag: 'https://media-2.api-sports.io/flags/us.svg',
        season: 2023,
        round: 'Quarter-finals',
      },
      teams: {
        home: {
          id: 2242,
          name: 'FC Cincinnati',
          logo: 'https://media-1.api-sports.io/football/teams/2242.png',
          winner: null,
        },
        away: {
          id: 4010,
          name: 'Pittsburgh Riverhounds',
          logo: 'https://media-2.api-sports.io/football/teams/4010.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 11,
            extra: null,
          },
          team: {
            id: 2242,
            name: 'FC Cincinnati',
            logo: 'https://media-3.api-sports.io/football/teams/2242.png',
          },
          player: {
            id: 28398,
            name: 'O. Nwobodo',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 14,
            extra: null,
          },
          team: {
            id: 4010,
            name: 'Pittsburgh Riverhounds',
            logo: 'https://media-3.api-sports.io/football/teams/4010.png',
          },
          player: {
            id: null,
            name: 'M. Ybarra',
          },
          assist: {
            id: 102365,
            name: 'A. Dikwa',
          },
          type: 'subst',
          detail: 'Substitution 1',
          comments: null,
        },
        {
          time: {
            elapsed: 23,
            extra: null,
          },
          team: {
            id: 4010,
            name: 'Pittsburgh Riverhounds',
            logo: 'https://media-3.api-sports.io/football/teams/4010.png',
          },
          player: {
            id: null,
            name: 'L. Biasi',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 29,
            extra: null,
          },
          team: {
            id: 2242,
            name: 'FC Cincinnati',
            logo: 'https://media-2.api-sports.io/football/teams/2242.png',
          },
          player: {
            id: 351572,
            name: 'I. Murphy',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 35,
            extra: null,
          },
          team: {
            id: 2242,
            name: 'FC Cincinnati',
            logo: 'https://media-3.api-sports.io/football/teams/2242.png',
          },
          player: {
            id: 51140,
            name: 'D. Badji',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 4010,
            name: 'Pittsburgh Riverhounds',
            logo: 'https://media-3.api-sports.io/football/teams/4010.png',
          },
          player: {
            id: 71323,
            name: 'K. Forbes',
          },
          assist: {
            id: 71328,
            name: 'R. Mertz',
          },
          type: 'subst',
          detail: 'Substitution 2',
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 2242,
            name: 'FC Cincinnati',
            logo: 'https://media-3.api-sports.io/football/teams/2242.png',
          },
          player: {
            id: 195717,
            name: 'Y. Mosquera',
          },
          assist: {
            id: 50977,
            name: 'N. Hagglund',
          },
          type: 'subst',
          detail: 'Substitution 1',
          comments: null,
        },
      ],
    },
  ],
};

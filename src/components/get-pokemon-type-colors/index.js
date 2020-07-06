export function GetPokemonTypeColors(type) {
  switch (type) {
    case 'grass':
      return { gradient: ['#5FBC51', '#5AC178'], solid: '#5DBE62' };

    case 'poison':
      return { gradient: ['#A864C7', '#C261D4'], solid: '#B563CE' };

    case 'fire':
      return { gradient: ['#FB9B51', '#FBAE46'], solid: '#F8A54F' };

    case 'flying':
      return { gradient: ['#90A7DA', '#A6C2F2'], solid: '#9BB4E8' };

    case 'water':
      return { gradient: ['#4A90DD', '#6CBDE4'], solid: '#559EDF' };

    case 'bug':
      return { gradient: ['#92BC2C', '#AFC836'], solid: '#9DC130' };

    case 'normal':
      return { gradient: ['#9298A4', '#A3A49E'], solid: '#9A9DA1' };

    case 'electric':
      return { gradient: ['#EDD53E', '#FBE273'], solid: '#EDD53F' };
  }
}

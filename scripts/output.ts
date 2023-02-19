export enum Color {
    BLACK = '\x1b[30m',
    RED = '\x1b[31m',
    GREEN = '\x1b[32m',
    YELLOW = '\x1b[33m',
    BLUE = '\x1b[34m',
    MAGENTA = '\x1b[35m',
    CYAN = '\x1b[36m',
    WHITE = '\x1b[37m',
    GRAY = '\x1b[90m'
}

export enum Effects {
    RESET = '\x1b[0m',
    BRIGHT = '\x1b[1m',
    DIM = '\x1b[2m',
    UNDERSCORE = '\x1b[4m',
    BLINK = '\x1b[5m',
    REVERSE = '\x1b[7m',
    HIDDEN = '\x1b[8m'
}

export enum BackgroundColor {
    BLACK = '\x1b[40m',
    RED = '\x1b[41m',
    GREEN = '\x1b[42m',
    YELLOW = '\x1b[43m',
    BLUE = '\x1b[44m',
    MAGENTA = '\x1b[45m',
    CYAN = '\x1b[46m',
    WHITE = '\x1b[47m',
    GRAY = '\x1b[100m'
}

export const output = (
    text: string,
    options?: {
        color?: Color;
        backgroundColor?: BackgroundColor;
        effects?: Array<Effects>;
    }
) => {
    const { color = '', backgroundColor = '', effects = [] } = options || {};
    let effectsString = '';
    for (const effect of effects) {
        effectsString += effect;
    }
    console.log(`${Effects.RESET}${effectsString}${color}${backgroundColor}${text}`);
};

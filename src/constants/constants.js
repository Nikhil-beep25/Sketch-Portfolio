const DIRECTION = {
    FORWARD: 'forward',
    BACKWARD: 'backward',
}

const FACING = {
    FRONT: 'front',
    BACK: 'back',
}

const CHARACTER_IMAGES = {
    FRONT: '/images/character/front.avif',
    BACK: '/images/character/back.avif',
    THINKING_FRONT: '/images/character/front_thinking.avif',
    THINKING_BACK: '/images/character/back_thinking.avif',
}

const SIDE = {
    LEFT: 'left',
    RIGHT: 'right',
}

const PX_PER_HOP = 20;
const SCROLL_TIP_THRESHOLD = 100;
const DOOR_MARGIN = 10;

const SCROLL_TIP_DELAY = 3000;

const PLANE = {
    TIMEOUT: 5000,
    DURATION: 4200,
    LOOP_START: 0.24,
    LOOP_END: 0.76,
}

const DEFAULT_DOOR_VOLUME = 0.15;
const DEFAULT_PAPER_VOLUME = 0.20;
const SOUND_STORAGE_KEY = "sketch_portfolio_sound_muted";

export {
    DIRECTION,
    FACING,
    CHARACTER_IMAGES,
    PX_PER_HOP,
    SIDE,
    DOOR_MARGIN,
    SCROLL_TIP_THRESHOLD,
    SCROLL_TIP_DELAY,
    PLANE,
    DEFAULT_DOOR_VOLUME,
    DEFAULT_PAPER_VOLUME,
    SOUND_STORAGE_KEY
};
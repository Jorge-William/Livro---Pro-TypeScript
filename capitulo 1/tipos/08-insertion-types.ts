interface Skier {
    slide(): void;
}

interface Shooter {
    shoot(): void;
}

type Biathlete = Skier & Shooter;

let biathlete: Biathlete = null;

biathlete.shoot

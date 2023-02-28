interface Options {
    material: string,
    backlight: boolean
}

// Interface readonly criada manualmente
interface OptionsManualmenteSomenteLeitura {
    readonly material: string,
    readonly backlight: boolean
}

// Interface optional criada manualmente
interface OptionsManualmenteOpcional {
    material?: string,
    backlight?: boolean
}

// Interface nullavel criada manualmente
interface OptionsManuallyNullavel {
    material: string | null,
    backlight: boolean | null
}
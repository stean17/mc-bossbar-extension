// MakeCode Minecraft command bridge
declare namespace commands {
    function run(command: string): void;
}

namespace bossbar {

    // Boss bar colors
    export enum BossBarColor {
        //% block="pink"
        pink,
        //% block="blue"
        blue,
        //% block="red"
        red,
        //% block="green"
        green,
        //% block="yellow"
        yellow,
        //% block="purple"
        purple,
        //% block="white"
        white
    }

    // Boss bar styles
    export enum BossBarStyle {
        //% block="progress"
        progress,
        //% block="notched 6"
        notched_6,
        //% block="notched 10"
        notched_10,
        //% block="notched 20"
        notched_20
    }

    /**
     * Create a boss bar
     */
    //% block="create boss bar id %id title %title"
    export function create(id: string, title: string): void {
        commands.run(`bossbar add ${id} "${title}"`)
    }

    /**
     * Set boss bar progress (0–100)
     */
    //% block="set boss bar %id progress %value"
    //% value.min=0 value.max=100
    export function setProgress(id: string, value: number): void {
        commands.run(`bossbar set ${id} value ${value}`)
    }

    /**
     * Set boss bar title
     */
    //% block="set boss bar %id title %title"
    export function setTitle(id: string, title: string): void {
        commands.run(`bossbar set ${id} name "${title}"`)
    }

    /**
     * Set boss bar color
     */
    //% block="set boss bar %id color %color"
    export function setColor(id: string, color: BossBarColor): void {
        commands.run(`bossbar set ${id} color ${BossBarColor[color]}`)
    }

    /**
     * Set boss bar style
     */
    //% block="set boss bar %id style %style"
    export function setStyle(id: string, style: BossBarStyle): void {
        commands.run(`bossbar set ${id} style ${BossBarStyle[style]}`)
    }

    /**
     * Show boss bar to all players
     */
    //% block="show boss bar %id"
    export function show(id: string): void {
        commands.run(`bossbar set ${id} players @a`)
    }

    /**
     * Remove boss bar
     */
    //% block="remove boss bar %id"
    export function remove(id: string): void {
        commands.run(`bossbar remove ${id}`)
    }
}


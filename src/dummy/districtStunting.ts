import { TStunting, randomStunting } from './stunting'
import { mapsEmbed } from './mapsEmbed'


export type TDistrictStunting = TStunting & {
    district: string
    year: number,
    location: string
}

const district = ['Babat', 'Bluluk', 'Brondong', 'Deket', 'Glagah', 'Kalitengah', 'Karangbinangun', 'Karanggeneng', 'Kedungpring', 'Kembangbahu', 'Lamongan', 'Laren', 'Maduran', 'Mantup', 'Modo', 'Ngimbang', 'Paciran', 'Pucuk', 'Sambeng', 'Sarirejo']

export const data = district.map((d, i): TDistrictStunting => {
    const stunting = randomStunting()
    const date = new Date()
    const maps = mapsEmbed[i]
    const mapsDom = new DOMParser().parseFromString(maps, 'text/html')
    const location = mapsDom.body.querySelector('iframe')?.getAttribute('src') ?? ''
    return {
        district: d,
        year: date.getFullYear(),
        location,
        ...stunting
    }
})
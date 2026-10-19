
import Countries from "../pages/Countries"

type NativeName = {
    common: string
    official: string

}
export type CountriesResponse = {
    data: {
        objects: Countries[]
    }
}
export type Countries = {
    names: {
        common: string
        official: string
        native: Record<string, NativeName>
    }
    capitals: {
        name: string
    }[]
    flag: {
        url_png: string
        url_svg: string
    }
    region: string
    subregion: string

    continents: string[]

    coordinates: {
        lat: number
        lng: number
    }
    currencies: {
        code: string
        name: string
        symbol: string
    }[]
    population: number

    languages: {
        name: string

    }[]

}

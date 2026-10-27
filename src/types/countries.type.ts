
import Countries from "../pages/Home"

type NativeName = {
    common: string
    official: string

}
export type CountriesResponse = {
    data: {
        objects: Countries[]
        meta: {
            total: number
            count: number
            limit: number
            offset: number
            more: boolean
            request_id: string
            duration: number
        }
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
        coordinates: {
            lat: number
            lng: number
        }
    }[]
    flag: {
        url_png: string
        url_svg: string
    }
    region: string
    subregion: string

    continents: string[]


    currencies: {
        code: string
        name: string
        symbol: string
    }[]
    population: number
    uuid: string
    languages: {
        name: string

    }[]
    codes: {

        alpha_3: string


    },
}


import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  type LucideIcon,
} from "lucide-react"


export const weatherByCode: Record<number,{description:string; icon:LucideIcon}>= {
0:{description:'Clear',icon:Sun},
1:{description:'Mostly Clear',icon:CloudSun},
2:{description:'Partly Cloudy',icon:CloudSun},
3:{description:'Cloudy',icon:Cloud},
45:{description:'Fog',icon:CloudFog},
48:{description:'Supercooled fog',icon:CloudFog},
51:{description:'Light drizzle',icon:CloudDrizzle},
61:{description:'Light rain',icon:CloudRain},

63:{description:'Moderate rain',icon:CloudRain},
65:{description:'Heavy rain',icon:CloudRain},
71:{description:'Light snowfall',icon:CloudSnow},

80:{description:'Rain showers',icon:CloudRain},
95:{description:'Lightning',icon:CloudLightning},
}
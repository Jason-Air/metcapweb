import { yerIzobar } from "./yerizobar";
import { kontur850 } from "./850kontur";
import { sicaklik } from "./sicaklik";

export var layers = [
    {
        layerId: 0,
        layerText: "Yer Kartı İzobar",
        layerName: yerIzobar,
        layerType: 0 // 0: kontur, 1: gradyan renk
    },
    {
        layerId: 1,
        layerText: "850 hPa Kontur",
        layerName: kontur850,
        layerType: 0
    },
    {
        layerId: 2,
        layerText: "Yer Sıcaklık",
        layerName: sicaklik,
        layerType: 1
    }
]
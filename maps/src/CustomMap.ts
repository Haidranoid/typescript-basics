export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private map: google.maps.Map;

    constructor(elementId: string) {
        this.map = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            },
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker();

        marker.setOptions({
            map: this.map,
            position: mappable.location
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });

        marker.addListener('click', () => {
            infoWindow.open(this.map, marker)
        })
    }
}


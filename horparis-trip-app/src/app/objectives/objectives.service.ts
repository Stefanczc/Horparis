import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";

@Injectable({
    providedIn: 'root',
})

export class ObjectivesService {

    private itineraryContent: Activity[] = [
        {
            id: 1,
            title: 'Activitati',
            description: "Din avion, spre gara si pana la muzeul Louvre!",
            objectives: [
            {
              id: 1,
              name: 'Gare du Nord',
              picture: '../assets/day1/gare_du_nord.jfif',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 2,
              name: 'Holybelly',
              picture: '../assets/day1/holybelly.jpg',
              checked: false,
              price: '10-15€',
            },
            {
              id: 3,
              name: 'Porte Saint-Denis',
              picture: '../assets/day1/stdennis_porte.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 4,
              name: 'Place des Victoires',
              picture: '../assets/day1/victoires_paris.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 5,
              name: 'Jardin du Palais Royal',
              picture: '../assets/day1/palais_royal.jpeg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 6,
              name: 'Musee du Louvre',
              picture: '/assets/day1/louvre_museum.jpg',
              checked: false,
              price: '22€',
            }
          ],
            showObjectives: false,
            link: "https://www.google.com/maps/dir/Gare+du+Nord,+Rue+de+Dunkerque,+Paris,+Fran%C5%A3a/''/Porte+Saint-Denis/Place+des+Victoires/Jardin+du+Palais+Royal/Louvre+Museum,+Paris,+Fran%C5%A3a/@48.8721972,2.3356629,14.75z/data=!3m1!5s0x47f112d46c2f6eef:0xfb8a933f53aec2c6!4m42!4m41!1m5!1m1!1s0x47e66e6bfc58a37f:0x4fb63768d2dd790c!2m2!1d2.35503!2d48.88051!1m5!1m1!1s0x47e66e0dd56340a1:0x8491e9bc1ef99ad8!2m2!1d2.3596596!2d48.8710383!1m5!1m1!1s0x47e66f013ce3ea95:0xc85b7b649a004c2d!2m2!1d2.352704!2d48.8698004!1m5!1m1!1s0x47e66fd34316cb7f:0x48678fac6e8e53a7!2m2!1d2.3411724!2d48.865652!1m5!1m1!1s0x47e66e25aa74bce5:0x26b66d8ea44cf7b3!2m2!1d2.3378061!2d48.8649723!1m5!1m1!1s0x47e671d877937b0f:0xb975fcfa192f84d4!2m2!1d2.337644!2d48.8606111!2m3!6e0!7e2!8j1731918600!3e2?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
          },
          {
            id: 2,
            title: 'Activitati',
            description: 'De la osemintele lui Napoleon pana in celebrul Turn Eiffel.',
            objectives: [
            {
              id: 1,
              name: 'Hotelul des Invalides',
              picture: '../../assets/day2/hotel_invalides.jpg',
              checked: false,
              price: '15€',
            },
            {
              id: 2,
              name: 'Place de la Concorde',
              picture: '../../assets/day2/place_concorde.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 3,
              name: 'Petit Palais',
              picture: '../../assets/day2/petit_palais.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 4,
              name: 'Grand Palais',
              picture: '../../assets/day2/grand_palais.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 5,
              name: "Pont Alexandre III",
              picture: '../../assets/day2/alexandrePont.jpg',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 6,
              name: "Musee d'Art Moderne",
              picture: '../../assets/day2/musee_art.jfif',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 7,
              name: 'Trocadero',
              picture: '../../assets/day2/trocadero.jfif',
              checked: false,
              price: 'Gratis',
            },
            {
              id: 8,
              name: 'Tour Eiffel',
              picture: '../../assets/day2/tour-eiffel.jpg',
              checked: false,
              price: "14€ - 22€ - 35€",
            }
          ],
            showObjectives: false,
            link: "https://www.google.ro/maps/dir/H%C3%B4tel+des+Invalides,+Paris,+Fran%C5%A3a/48.8658808,2.3217342/Petit+Palais/Grand+Palais/Pont+Alexandre+III/Mus%C3%A9e+d'Art+Moderne+de+Paris/Place+du+Trocad%C3%A9ro/Tour+Eiffel/@48.8644342,2.3072486,15.25z/data=!3m1!5s0x47e66ffb670da54d:0xf0e8a2f21415485d!4m45!4m44!1m5!1m1!1s0x47e66fd7b98f3053:0x455a14459c80c16a!2m2!1d2.3127059!2d48.856529!1m0!1m5!1m1!1s0x47e66fd1ce8f4349:0xf3f5be813dd2469c!2m2!1d2.3145896!2d48.8660479!1m5!1m1!1s0x47e66fd048eedcd1:0x499b45575147a06b!2m2!1d2.3124544!2d48.8661091!1m5!1m1!1s0x47e66fd057a1f0b9:0xeb0032bf06974d4f!2m2!1d2.313559!2d48.8638995!1m5!1m1!1s0x47e66fe7988e74af:0x60dec2cd0e194c25!2m2!1d2.2978208!2d48.8643421!1m5!1m1!1s0x47e66fe3405d7ecf:0xc03ac392486d25b5!2m2!1d2.2873248!2d48.8628748!1m5!1m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!2m2!1d2.2944813!2d48.8583701!3e2?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
          },
          {
            id: 3,
            title: 'Activitati',
            description: "Din Catacombe pana la Catedrala 'Notre-Dame de Paris'.",
            objectives: [
              {
                id: 1,
                name: 'Catacombs of Paris',
                picture: '../../assets/day3/catacombes.jfif',
                checked: false,
                price: '30€',
              },
              {
                id: 2,
                name: 'Montparnasse',
                picture: '../../assets/day3/montparnasse.jpg',
                checked: false,
                price: '18€(online)/22€(pe loc)'
              },
              {
                id: 3,
                name: "Jardin du Luxembourg",
                picture: '../../assets/day3/luxemburg_jardin.jpg',
                checked: false,
                price: 'Gratis',
              },
              {
                id: 4,
                name: 'Pantheon',
                picture: '../../assets/day3/pantheon.jpg',
                checked: false,
                price: '15€',
              },
              {
                id: 5,
                name: 'Saint-Chapelle',
                picture: '../../assets/day3/sainte_chapelle.jpg',
                checked: false,
                price: '13€',
              },
              {
                id: 6,
                name: 'Cathedrale Notre-Dame',
                picture: '../../assets/day3/notre-damme.jpg',
                checked: false,
                price: 'Gratis(vedere de afara)',
              }
            ],
            showObjectives: false,
            link: "https://www.google.fr/maps/dir/86+Rue+Raymond+Lefebvre,+94250+Gentilly,+Fran%C5%A3a/Catacombs+of+Paris,+Avenue+du+Colonel+Henri+Rol-Tanguy,+Paris,+Fran%C5%A3a/Montparnasse,+Paris,+Fran%C5%A3a/Jardin+du+Luxembourg,+Paris,+Fran%C5%A3a/Panth%C3%A9on,+Place+du+Panth%C3%A9on,+Paris,+Fran%C5%A3a/Sainte-Chapelle,+Boulevard+du+Palais,+Paris,+Fran%C5%A3a/Cath%C3%A9drale+Notre-Dame+de+Paris,+Parvis+Notre-Dame+-+Place+Jean-Paul-II,+Paris,+Fran%C5%A3a/@48.8378968,2.3321954,13z/data=!4m44!4m43!1m5!1m1!1s0x47e6710b4ff665b1:0x1541088fec314107!2m2!1d2.3400906!2d48.8117068!1m5!1m1!1s0x47e671b6c1d0b675:0xc8d7f073e62eb4b3!2m2!1d2.3323932!2d48.8339119!1m5!1m1!1s0x47e671c7ec66755b:0xc9c5e482069c4490!2m2!1d2.330491!2d48.8393304!1m5!1m1!1s0x47e671db36de687b:0x791dd61b089f98b!2m2!1d2.3363309!2d48.8466144!1m5!1m1!1s0x47e671e7d297c973:0xe5eb004f23a758!2m2!1d2.3464138!2d48.8462218!1m5!1m1!1s0x47e66e1fd8767d47:0x33f441f9dc242768!2m2!1d2.3449609!2d48.855375!1m5!1m1!1s0x47e671e19ff53a01:0x36401da7abfa068d!2m2!1d2.3499021!2d48.8529682!3e2?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
          },
          {
            id: 4,
            title: 'Activitati',
            description: 'De la Montparnasse pana in bogatiile de la Versaille.',
            objectives: [
              {
                id: 1,
                name: 'Palace Versailles',
                picture: '../../assets/day4/palais_versailles.jpg',
                checked: false,
                price: '32€',
              },
              {
                id: 2,
                name: 'Basilique du Sacré-Cœur',
                picture: '../../assets/day4/sacre_cour.jfif',
                checked: false,
                price: 'Gratis',
              },
              {
                id: 3,
                name: 'Palais Garnier',
                picture: '../../assets/day4/palais_garnier.jpg',
                checked: false,
                price: '15€',

              },
            ],
            showObjectives: false,
            link: "https://www.google.ro/maps/dir/Montparnasse,+Paris,+Fran%C5%A3a/Versailles,+Fran%C5%A3a/@48.8048637,2.0787926,13z/data=!4m16!4m15!1m5!1m1!1s0x47e671c7ec66755b:0xc9c5e482069c4490!2m2!1d2.330491!2d48.8393304!1m5!1m1!1s0x47e67db475f420bd:0x869e00ad0d844aba!2m2!1d2.1297422!2d48.8022585!2m1!4e2!3e3?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          }
    ]

    private storageKey = 'itineraryContent';

    getItinerary(): Activity[] {
      const savedItinerary = localStorage.getItem(this.storageKey);
      if (savedItinerary) {
        return JSON.parse(savedItinerary);
      }  
      return this.itineraryContent;
    }

    updateCheckedState(activityId: number, objectiveId: number, checked: boolean) {
      const itinerary = this.getItinerary();
      const activity = itinerary.find(a => a.id === activityId);
      if (activity) {
        const objective = activity.objectives.find(o => o.id === objectiveId);
        if (objective) {
          objective.checked = checked;
          localStorage.setItem(this.storageKey, JSON.stringify(itinerary));
        }
      }
    }
}
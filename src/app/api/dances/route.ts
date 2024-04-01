import { danceItem } from "@/interfaces/dance";
import { NextResponse, NextRequest } from "next/server";

const dances: danceItem[] = [
  {
    id: 1,
    danceName: "Zinli",
    imagePath: "/images/agbadja.svg",
    shortDesc: "Le Zinli, autrefois appelé Avi zinli, est à la fois un rythme et une musique traditionnelle béninoise.C'est une danse culturelle du sud Benin se produisant principalement lors des cérémonies funéraires; majoritairement le département du Zou; plus précisément dans le plateau d'Abomey",
    history: "L'histoire du Zinli remonte au temps des Rois du Danxomè. Le prince Gbéyin, futur roi Glèlè (1858 - 1889) de Danxomè aurait créé le Zinli au XIXè siècle à l'occasion des funérailles d'un des amis de son père, le roi Guézo. Depuis lors, ce rythme funéraire du plateau d'Abomey a gardé cette renommée initiale avant de s'inscrire dans le registre des musiques populaires. Mais si le Zinli a pu retrouver toute sa notoriété, c'est grâce à la touche particulière de Michel Loukou, plus connu du public sous le nom « Alèkpéhanhou ». La touche que l'artiste Alèkpéhanhou a apportée au Zinli à partir des années 1980 l'a fait connaître jusqu'aux extrémités de la terre. Grâce à son travail rénovateur, le roi du Zinli est sollicité sur bon nombre de festivals européens.",
    pratice: "Ce rythme est joué avec des vases en terre cuite caressés par un éventail qui lui confère un son assez lugubre, rappelant le deuil et le changement d’humeur des membres de la famille éplorée. Ce son est accompagné par d’autres instruments que sont le tambour « kpézen » et les gongs de diverses formes.",
  },
  {
    id: 2,
    danceName: "Tipenti",
    imagePath: "/images/agbadja.svg",
    shortDesc: "",
    history: "",
    pratice: "",
  },
  {
    id: 3,
    danceName: "Tchenkoume",
    imagePath: "/images/agbadja.svg",
    shortDesc: "",
    history: "",
    pratice: "",
  },
  {
    id: 4,
    danceName: "Agbadja",
    imagePath: "/images/agbadja.svg",
    shortDesc: "",
    history: "",
    pratice: "",
  },
  {
    id: 5,
    danceName: "Zinli",
    imagePath: "/images/agbadja.svg",
    shortDesc: "",
    history: "",
    pratice: "",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("id");

  if (id) {
    const dance = dances.find((item) => item.id === parseInt(id, 10));
    if (dance) {
      return NextResponse.json(dance);
    } else {
      return NextResponse.json(
        { error: `Dance item with id ${id} not found` },
        { status: 404 }
      );
    }
  } else {
    return NextResponse.json(dances);
  }
}

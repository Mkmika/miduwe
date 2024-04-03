import { danceItem } from "@/interfaces/dance";
import { NextResponse, NextRequest } from "next/server";

const dances: danceItem[] = [
  {
    id: 1,
    danceName: "Zinli",
    imagePath: "/images/zinli.svg",
    shortDesc: "Le Zinli, autrefois appelé Avi zinli, est à la fois un rythme et une musique traditionnelle béninoise.C'est une danse culturelle du sud Benin se produisant principalement lors des cérémonies funéraires; majoritairement le département du Zou; plus précisément dans le plateau d'Abomey",
    history: "L'histoire du Zinli remonte au temps des Rois du Danxomè. Le prince Gbéyin, futur roi Glèlè (1858 - 1889) de Danxomè aurait créé le Zinli au XIXè siècle à l'occasion des funérailles d'un des amis de son père, le roi Guézo. Depuis lors, ce rythme funéraire du plateau d'Abomey a gardé cette renommée initiale avant de s'inscrire dans le registre des musiques populaires. Mais si le Zinli a pu retrouver toute sa notoriété, c'est grâce à la touche particulière de Michel Loukou, plus connu du public sous le nom « Alèkpéhanhou ». La touche que l'artiste Alèkpéhanhou a apportée au Zinli à partir des années 1980 l'a fait connaître jusqu'aux extrémités de la terre. Grâce à son travail rénovateur, le roi du Zinli est sollicité sur bon nombre de festivals européens.",
    pratice: "Ce rythme est joué avec des vases en terre cuite caressés par un éventail qui lui confère un son assez lugubre, rappelant le deuil et le changement d’humeur des membres de la famille éplorée. Ce son est accompagné par d’autres instruments que sont le tambour « kpézen » et les gongs de diverses formes.",
    audio: "",
    videoUrl: "https://youtu.be/UFdlHUk4ex4?si=SHK-9NWl1wxV_phQ"
  },
  {
    id: 2,
    danceName: "Tipenti",
    imagePath: "/images/tipenti.svg",
    shortDesc: "Le Tipenti est une danse exécutée par les hommes, essentiellement des cultivateurs et des paysans pour célébrer et se réjouir de la fin des travaux de mil et de sorgho. Cette danse à l'origine, s’exécute à la dernière séance de sarclage au sein de l'ethnie Otamari dans le département de l'Atacora au nord-ouest du Bénin.",
    history: "Le Tipenti est une danse de réjouissance. Elle est exécutée par le peuple ‘’Otammari’’ ou les ‘’Bètamaribê’’ dans les départements de l’Atacora et la Donga. Exclusivement réservé aux hommes selon la coutume, elle est pratiquée par la caste des cultivateurs lors de la récolte du petit mil ou du sorgho. Analogiquement, il peut être rapproché de la danse des prémisses chez les hébreux dans la Grèce antique. Le Tipenti est exécuté pendant la dernière séance de sarclage, pour booster le moral des agriculteurs. Aujourd’hui, le Tipenti est devenu une danse de réjouissance populaire et est accessible aux femmes.",
    pratice: " Pour danser le Tipenti, les hommes adoptent un style vestimentaire particulier. En effet, les danseurs se coiffent d'un casque à cornes (ou sans corne), mettent des bracelets autour des bras et des pieds . Ces bracelets sont originellement faits à base de laine de mouton. Hormis cela, ils tiennent à la main un petit gong et deux bagues dont une se porte à l'index et l'autre au pouce et qui produisent quand ils les font se toucher. Parmi les danseurs, il y a un meneur qui est affublé d'une flûte appelée le Fatan'fa",
    audio: "",
    videoUrl: "https://youtu.be/Ri-Ok7s0oCs?si=pgQ_la6xyV5dkFSZ"
  },
  {
    id: 3,
    danceName: "Tchinkounmè",
    imagePath: "/images/tchinkoume.svg",
    shortDesc: "Le Tchinkounmè est à la fois un genre musical et une danse traditionnelle de la région de Savalou et du département des collines au Bénin. ",
    history: "Venu de la région de Savalou et répandu dans le département des collines1, le Tchinkounmè se joue à base de percussions aquatiques et de gota (grosse gourde en calebasse) raclés et frappés à l'aide d'un gros chiffon ou sandale en plastique en forme d’éventail. Genre musical traditionnel, le tchinkounmè s'est modernisé dans les années 60-70 par Anatole Houndéfo alias Alokpon originaire de Savalou. Il s'exécute le plus souvent lors des cérémonies de réjouissances populaires comme les inhumations, les mariages, et aussi les baptêmes traditionnels",
    pratice: "C’est une danse qui montre beaucoup plus la souplesse des épaules. Les membres assis sur des bancs formant un cercle autour du griot. Les femmes d’un côté et les hommes de l’autre. Le griot, près des batteurs, entonne des chants. Pour danser les danseurs se lèvent deux par deux en mettant tout le corps en mouvement, les bras légèrement ouverts.",
    audio: "",
    videoUrl: "https://youtu.be/9qG40kTt5oc?si=GwomtceZ3LylFQ71"
  },
  {
    id: 4,
    danceName: "Agbadja",
    imagePath: "/images/agbadja.svg",
    shortDesc: "L'Agbadja est une danse traditionnelle que l'on retrouve au Sud-Ouest du Bénin (plus précisément dans les départements du Mono et du Couffo) au sud du Togo (Région maritime) et au Ghana .",
    history: "Avant que l'on retrouve cette danse au Bénin de nos jours, elle est d'abord l’œuvre du peuple Ewe principalement des pêcheurs ghanéens qui l'exécutent après une journée de travail bien remplie. L'agbadja est donc une danse des Ewe que l'on rencontre au Ghana, au Bénin et au Togo5. En réalité, l'agbadja est une danse qui est issue de l'atrikpui qui est une danse de guerre qu'exécutaient les populations de la région de la Volta dans le but d'encourager leurs guerriers ou de les accueillir triomphalement. Les périodes guerrières étant terminées, l'atrikpui laisse sa place à l'agbadja et à d'autres danses plus gaies . Les Ewe dispersent ce rythme populaire agbadja. Les spectacles et les festivals traditionnels ou modernes accueillent les danseurs et les batteurs d'agbadja. Les accoutrements des artistes et danseurs d'agbadja sont basés sur les habillements traditionnels des Noirs africains comme le pagne.",
    pratice: "L'agbadja est une danse qui au départ est lente et légère, puis énergique, voire brutale, faisant intervenir de forts mouvements d'épaules. Le danseur est en dooplé (genoux fléchis), les bras en partie repliés sur la poitrine . Il exécute une série de mouvements commençant par les épaules et les omoplates. Toujours en dooplé, ses pieds battent tour à tour la terre. Elle se danse surtout lors des cérémonies de réjouissances populaires, mais aussi lors d'événements moins gais comme les funérailles.",
    audio: "",
    videoUrl: "https://youtu.be/BRab8YlUmOE?si=d3VrYjEmL0mBGHy8"
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

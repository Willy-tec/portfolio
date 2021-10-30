import reservia from '../asset/reservia.jpg';
import ohmyfood from '../asset/ohmyfood.jpg';
import gameon from '../asset/gameon.jpg';
import fisheye from '../asset/fisheye.jpg';
import petitplat from '../asset/petitplat.jpg';

const website = [
    {
        img: reservia,
        title: 'Reservia',
        type: 'Formation Open Class Room',
        description:
            "concevoir la page d'accueil du site reservia en utilisant uniquement Html/css, et en respectant la maquette fournie.",
    },
    {
        img: ohmyfood,
        title: 'Oh My Food',
        type: 'Formation Open Class Room',
        description:
            "Concevoir un site en html/css qui respecte une maquette donnée. Proposer des animations CSS, et implémenter les media query pour rendre le site 'responsive'",
    },
    {
        img: gameon,
        title: 'Game On',
        type: 'Formation Open Class Room',
        description:
            "Implementer un formulaire, et les validations. Corriger les erreurs d'implémentation existante. La base du site est déja fourni.",
    },
    {
        img: fisheye,
        title: 'Fish Eye',
        type: 'Formation Open Class Room',
        description:
            'Créer un site accessible pour une plateforme de photographes. Le projet doit respecter la maquette fournie, et le site doit être controlable via clavier.',
    },
    {
        img: petitplat,
        title: 'Les petits plats',
        type: 'Formation Open Class Room',
        description:
            "Création de la page affichant la liste des recherches, et implémenter un algorithme permettant de recherche une recette selon une valeur issu d'un text input, ou des tags permettant de choisir parmi les outils, ingrédients ou ustensiles",
    },
];

export default website;

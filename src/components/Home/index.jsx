import SHome from './style';

export default function Home() {
  return (
    <SHome>
      <h1>Test React.js</h1>
      <ul>
        <li>
          Le but de ce test est de lister les films du studio japonais Ghibli.
        </li>
        <li>
          Pour cela, il est nécessaire de faire appel à l'api :
          https://ghibliapi.herokuapp.com/films
        </li>
        <li>
          Tu peux retrouver la documentation sur ce lien :
          https://ghibliapi.herokuapp.com/#tag/Films
        </li>
        <li>
          La police est une google font :
          https://fonts.google.com/specimen/Nunito
        </li>
        <li>Tu trouveras les images nécessaires en pièces jointes.</li>
        <li>
          Comme indiqué sur la maquette lorsque le champ de recherche est vide,
          toutes les cartes doivent être affichées.
        </li>
        <li>
          En revanche, lorsque l'utilisateur remplie le champ. Au clic sur le
          bouton de recherche seule la carte correspondant au film doit être
          visible.
        </li>
        <li>
          (Par défaut, il est nécessaire de chercher avec un titre strictement
          égal à ce que retourne l'api.
        </li>
        <li>
          exemple : "My Neighbor totoro" ne fonctionnera pas, mais "My Neighbor
          Totoro" fonctionnera. Libre à toi de contourner le système si tu le
          souhaites :D )
        </li>
        <li>En bref, tu dois donc :</li>
        <ul>
          <li>
            - Intégrer la maquette fournie en desktop cartes comprises (même si
            le texte est du lorem ipsum)
          </li>
          <li>
            - Appeler l'api afin d'afficher la liste des films ainsi qu'avoir la
            possibilité de rechercher parmi les titres de ces films (la
            recherche par réalisateur n'est pas nécessaire.).
          </li>
        </ul>
        <li>
          Conseil : il vaut mieux avoir une partie complète que deux faites à
          moitié.
        </li>
        <li>
          Une fois fini : n'hésite pas à fournir un fichier détaillant ton
          processus de recherche et ton développement pendant ce test, ainsi
          qu'à faire part des éventuels points bloquants.
        </li>
      </ul>
    </SHome>
  );
}

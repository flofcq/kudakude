document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Set navbar fixed to top when scrolling
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    var bannerHeight = 203;
    if (window.scrollY > bannerHeight) {
      header.classList.add('kak-header-fixed');
    }
    if (window.scrollY < bannerHeight) {
      header.classList.remove('kak-header-fixed');
    }
  });

  // Header carousel
  setUpCarousel(
    document.getElementById('header-carousel'),
    {},
    document.getElementById('header-carousel-controls'),
    { prevNextButtons: false, loopDuration: 6000 }
  );

  // Testimony carousel
  setUpCarousel(
    document.getElementById('testimony-carousel'),
    {},
    document.getElementById('testimony-carousel-controls'),
    { prevNextButtons: false, loopDuration: 10000 }
  );

  // What Kudakude wants carousel
  setUpCarousel(
    document.getElementById('what-kudakude-wants-carousel'),
    { perPage: 2 },
    null,
    { loopDuration: 4000 }
  );

  // Partnered associations 
  setUpCarousel(
    document.getElementById('associations-carousel'),
    { perPage: 5 },
    null,
    { loopDuration: 3000 }
  );

});

$(document).ready(function () {
    $(".test").click(function () {
        $("#thedialog").attr('src', $(this).attr("href"));
        $("#somediv").dialog({
            width: 400,
            height: 450,
            modal: true,
            close: function () {
                $("#thedialog").attr('src', "about:blank");
            }
        });
        return false;
    });
});

var playModal = {
	
    soudain: {
      title: "<p class=\"has-text-centered\">Soudain l'été dernier - Stéphane Braunschweig</p>",
      content:
      "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Soudain.png\"></p>" +
      "<br>" +
      "<p class=\"has-text-centered\"><strong>11 avril 2017, 20h </strong></p>" +
      "<p class=\"has-text-centered\"><strong> Théâtre de l'Odéon - 6ème</strong></p>" +
      "<p class=\"has-text-centered\">Place de l’Odéon, Paris 6ème</p>" +
      "<p class=\"has-text-centered\">1h35</p>" +
      "<br>" +
      "<p>Soudain, l’été dernier, quelque chose s’est rompu. Un poète est mort à l’étranger, loin de chez lui. Et sur sa fin, une rumeur affreuse circule... Pour préserver sa mémoire, sa mère est prête à tout – y compris à faire interner la jeune cousine qui fut la seule à assister au drame. Comment arbitrer le combat sans merci entre les deux femmes ? Qui croire, et comment dénouer les lianes du réel et du désir ? La pièce a frappé Stéphane Braunschweig par « la manière dont la réalité s’y révèle sous les airs du plus terrifiant des fantasmes. » Il explore ici les terres torrides de Tennessee pour la première fois.</p>" +
      "<br>" +
      "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Soudain2.png\"></p>" +
      "<br>" +
	  "<p><a href=http://www.theatre-odeon.eu/fr/2016-2017/spectacles/soudain-l-ete-dernier> Plus d'informations </a></p>"
  },
  
  radeau: {
    title: "<p class=\"has-text-centered\">Le Radeau de la Méduse - Thomas Jolly</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Radeau.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>28 juin 2017, 20h </strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon - 17ème </strong></p>" +
    "<p class=\"has-text-centered\">1 Rue André Suares, Paris 17ème</p>" +
    "<p class=\"has-text-centered\">1h45</p>" +
    "<br>" +
    "<p> La pièce s’ouvre sur un effroyable naufrage. À l’aube, douze survivants sont découverts dans une unique embarcation : six garçons et six filles. Aucun ne paraît avoir plus de treize ans. Deux d’entre eux se distinguent. Ann serre contre elle un thermos de lait encore chaud. Allan a pensé à emporter son écharpe. Ils sont les premiers à se réveiller. « Allan et Ann » : leurs deux prénoms prononcés ensemble sonnent comme s’ils étaient « seuls au monde ».  Et c’est sans doute au premier couple, Adam et Ève, plus encore qu’à Noé, survivant du Déluge, qu’ils songent tous deux en contemplant la mer.</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Radeau2.png\"></p>" +
    "<br>" +
    "<p><a href=http://www.theatre-odeon.eu/fr/2016-2017/spectacles/le-radeau-de-la-meduse>Plus d'informations</a></p>"
},
	
  pinocchio: {
    title: "<p class=\"has-text-centered\">Pinocchio - Joël Pommerat</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Pinocchio.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong> vendredi 15 septembre 2017, 20h </strong></p>" +
    "<p class=\"has-text-centered\"><strong> MC 93</strong></p>" +
    "<p class=\"has-text-centered\">9 Boulevard Lénine, Bobigny</p>" +
    "<p class=\"has-text-centered\">1h15</p>" +
    "<br>" +
    "<p>Une succession de merveilleux tableaux pour raconter l’histoire de ce petit homme en bois qui tente maladroitement de devenir adulte avec cette aventure qui appartient aussi bien aux grands qu’aux petits, Joël Pommerat nous fait réfléchir et rêver. </p>" +
    "<br>" +
    "<p>Cette histoire pour enfant, comme tous les contes, dépasse largement le cercle des jeunes lecteurs. Joël Pommerat fait sienne cette histoire et réinvente pour faire entendre les difficultés du chemin vers l'âge adulte, ce qu'on appelle grandir.</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong> Un enchantement de théâtre, épuré, poétique et fascinant.</strong></p>" +
    "<br>" +
    "<p> « Sous la plume de Joël Pommerat, Pinocchio se transforme en un conte sombre sur la violence de la société. Sa mise en scène et l’impressionnante scénographie renforcent encore cette noirceur. Le narrateur, torse nu, rappelle que « rien n’est plus important que la vérité » et qu’elle se trouve là, sur une scène de théâtre. » Libération</p>"+
    "<br>" +
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Pinocchio2.png\"></p>" +
    "<br>" +
    "<p>Après une présentation par les équipes du théâtre, nous avons fait un grand voyage avec Pinocchio, du pays des imbéciles au ventre d'une baleine ... en passant par l'école !</p>" +
    "<br>" +
    "<p>Suite à la représentation, les 4 comédiens de la pièce et les régisseurs son et lumière sont venus nous expliquer la manière dont cette pièce est née et a été montée et ont répondu à nos questions sur le texte et les choix de mise en scène.</p>" 
  },
  
  solstice: {
    title: "<p class=\"has-text-centered\">Solstice - Blanca Li</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Solstice.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Samedi 7 octobre 2017, 20h </strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre National de Chaillot</strong></p>" +
    "<p class=\"has-text-centered\">1 Place du Trocadéro et du 11 Novembre, Paris 16ème</p>" +
    "<p class=\"has-text-centered\">1h30</p>" +
    "<br>" +
    "<p>Dans sa nouvelle création, Blanca Li propose un voyage fascinant et sensible dans un univers en mouvement pour dire la beauté du monde, sa force, son énergie et sa fragilité.</p>" +
    "<br>" +
    "<p>Pour Blanca Li, s’intéresser à l’avenir de la planète est mieux qu’une évidence : une urgence. Après avoir, il y a quatre ans, exploré l’univers des robots, elle aborde aujourd’hui, comme une « suite logique », le thème des relations entre l’homme et la nature. Pas de discours militant, mais un spectacle organique, qui convoque le souffle de l’air, la fraîcheur de la pluie, le ballet d’une feuille qui tombe… Tout ce qui constitue l’équilibre de notre écosystème, en pleine crise écologique et polémiques climato-sceptiques.</p>" +
    "<br>" +
    "<p>Pour mettre en œuvre ces interactions sensibles avec notre environnement quotidien, la chorégraphe et son scénographe ont conçu un dispositif original, présence constante et toujours en mouvement qui devient successivement nuage, terre, ciel ou vent. Sur une musique élaborée à partir de sons « naturels », les corps des quatorze danseurs vibrent à l’unisson, porteurs d’un message universel :</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong> Notre responsabilité à tous est de préparer le futur et de protéger ce qui nous entoure. </strong></p>" +
    "<br>" +
    "<p><a href=http://theatre-chaillot.fr/blanca-li-solstice></a>Plus d'informations</p>"
  },

  flammes: {
    title: "<p class=\"has-text-centered\">F(l)ammes - Ahmed Madani</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Flammes.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Vendredi 27 octobre2017, 20h</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Maison des Métallos</strong></p>" +
    "<p class=\"has-text-centered\">94 Rue Jean-Pierre Timbaud, Paris 11 ème</p>" +
    "<p class=\"has-text-centered\">1h35</p>" +
    "<br>" +
    "<p>Nées de parents ayant vécu l’exil, expertes de leur vie et de leur féminité, dix jeunes femmes des quartiers prennent la parole. L’identité de la jeunesse des zones urbaines sensibles est plus complexe, plus surprenante et plus mouvante qu’on ne l’imagine.</p>" +
    "<br>" +
    "<p>Ces F(l)ammes font une démonstration éclatante des promesses dont elles sont porteuses. Incandescentes, elles habitent le plateau avec grâce et détermination. Elles jouent, dansent, chantent, racontent des histoires étonnantes qui évoquent la place des femmes dans le monde d’aujourd’hui et les projette dans celui de demain.  Si la parole librement échangée a été au cœur du processus de création, l’écriture d’Ahmed Madani a ciselé un récit où la singularité de chacune est transcendée pour prendre une dimension universelle.</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong> Un acte esthétique, poétique et politique qui invite à voir le monde avec les yeux de l’autre pour changer son regard.</strong></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Flammes2.png\"> </p>"+
    "<br>" +
    "<p> Après cet incroyable spectacle, deux comédiennes de la compagnie sont venus échanger avec l'ensemble des spectateurs, dont les 8 membres d'Ambition Campus </p>" +
    "<br>" +
    "<p> Elles ont répondu à toutes nos questions sur le travail d'écriture, de mise en scène, de relation avec leur expérience personnelle ... Encore merci à elles pour leur énergie et leur disponibilité !</p>"+
    "<br>" +
    "<p><a href=http://www.maisondesmetallos.paris/2017/07/03/flammes></a>Plus d'informations</p>"
  },

  amour: {
    title: "<p class=\"has-text-centered\">Amour - Guillaume Barbot</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Amour.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Jeudi 16 novembre 2017, 19h</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de la cité internationale</strong></p>" +
    "<p class=\"has-text-centered\">17 Boulevard Jourdan, Paris 14ème</p>" +
    "<p class=\"has-text-centered\">1h45</p>" +
    "<br>" +
    "<p>L’enquête sur cette « arme de construction massive » proposée par Guillaume Barbot porte des paroles vives, fraîchement cueillies dans la ville. Immergés dans un théâtre de sensations, comédiens, danseurs et musiciens s’emparent d’un texte, d’un geste, d’un état irrationnel, fébrile ou ridicule, pour le convertir en un acte revendiqué. Comme s’il était devenu urgent de l’affirmer politiquement face au cynisme, au virtuel, à l’éphémère. Cet état des lieux contemporain élève l’amour au rang d’une croyance païenne et fougueuse.</p>"	+
    "<br>" +
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Amour2.jpg\"> </p>"+
    "<br>" +
    "<p> Merci au Théâtre de la Cité internationale et à toute la troupe d'Amour de Guillaume Barbot pour ce magnifique spectacle et ces très intéressants échanges, qui nous ont permis, avec Ambition Campus et l'AGORAé Paris d'en apprendre un peu plus sur (le concept de ?) l'amour !! </p>"+
    "<br>" +
    "<p><a href=http://www.theatredelacite.com/programme/guillaume-barbot_3</p>"
  },


  jamais: {
    title: "<p class=\"has-text-centered\">Jamais seul - Patrice Pineau</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Seul.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Dimanche 3 décembre 2017, 16h00</strong></p>" +
    "<p class=\"has-text-centered\"><strong> MC 93</strong></p>" +
    "<p class=\"has-text-centered\">9 Boulevard Lénine, Bobigny</p>" +
    "<p class=\"has-text-centered\">3h30</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Ils réenchantent le monde tous ces personnages inventés par Mohamed Rouabhi. Ils font de la poésie en étant simplement eux-mêmes, en transfigurant une humanité aux prises avec mille et une difficultés, en refusant de disparaître, de s’effacer.</p>" +
    "<br>" +
    "<p> Derrière ce qui pourrait apparaître comme des « vies minuscules » se cachent une richesse et une générosité qui les élèvent au rang de héros. Héros d'un combat difficile, fait de déceptions, de rêves brisés, d'espoirs fous et parfois de victoires chèrement acquises, porteurs d'une langue imagée qui témoigne d'une volonté de vivre, les personnages vont et viennent, se croisent, se parlent, s'embrassent ou s'engueulent, s'aiment ou se détestent. </p>" +
    "<br>" +
    "<p> On retrouve ici un monde populaire que le théâtre et le cinéma contemporains ont souvent oublié, celui de Jean Renoir ou de Jacques Prévert, un monde où l'humour a sa place, où le rire n'efface pas l'émotion, où la vie, même cabossée durement n'empêche pas la solidarité et l'amour.</p>"+
    "<br>" +
    "<p><a href=https://www.mc93.com/saison/jamais-seul-0</p>"
  },
  
  fresque: {
    title: "<p class=\"has-text-centered\">La Fresque - Angelin Preljocaj</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Fresque.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Dimanche 17 décembre 2017, 15h30</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre national de Chaillot</strong></p>" +
    "<p class=\"has-text-centered\">1 Place du Trocadéro et du 11 Novembre, Paris 16ème</p>" +
    "<p class=\"has-text-centered\">1h20</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Il était une fois en Chine deux voyageurs, qui, un jour de tempête, trouvent refuge dans un temple. Ils découvrent alors, sur l’un des murs, une fresque magnifique représentant un groupe de jeunes filles. Le voyageur nommé Chu tombe éperdument amoureux de l’une d’elles. Pour rejoindre l’objet de sa flamme, il traverse le tableau... Cette légende traditionnelle asiatique a inspiré à Angelin Preljocaj une rêverie somptueuse qui emporte le spectateur de l’autre côté du miroir.  La partition électro-fusion de Nicolas Godin, cofondateur du groupe Air et les costumes d’Azzedine Alaïa composent une troublante traversée des apparences, à mi-chemin entre représentation et réalité, un voyage dans un espace-temps parallèle fascine à tout âge. </p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Fresque2.jpg\"> </p>"+
    "<br>" +
    "<p class=\"has-text-centered\"> Ce magnifique ballet nous a emmenés très loin. Les incroyables danseurs, la très originale mise en scène et la surprenante musique nous ont vraiment permis de pfranchir le tableau !</p>"+
    "<br>" +
    "<p><a href=http://theatre-chaillot.fr/angelin-preljocaj-la-fresque</p>"
  },
  
  saigon: {
    title: "<p class=\"has-text-centered\">Saïgon - Caroline Nguyen</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Saigon.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Dimanche 28 janvier 2018, 15h</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon Berthier</strong></p>" +
    "<p class=\"has-text-centered\">1 Rue André Suares, Paris 17ème</p>" +
    "<p class=\"has-text-centered\">3h45</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Ce projet réunit des comédiens français et vietnamiens pour ensemble donner corps à 'cette France qui doit se raconter au-delà de ses propres frontières'. Bouquet de voix et de visages situé dans un restaurant valant pour tous lieux et tous temps, Saigon tresse des histoires d’exils et d’amour à partir de centaines d’émotions racontées en France et au Vietnam, puis métamorphosées en théâtre. </p>" + 
    "<br>" +
    "<p><a href=www.theatre-odeon.eu/fr/2017-2018/spectacles/saigon> Plus d'informations </a></p>"
  },
  
  andromaque: {
    title: "<p class=\"has-text-centered\">Andromaque, les héritiers - Damien Chardonnet</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Andromaque.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Samedi 10 février 2018, 20h30</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de la cité internationale</strong></p>" +
    "<p class=\"has-text-centered\">17 Boulevard Jourdan, Paris 14ème</p>" +
	"<p class=\"has-text-centered\">1h45</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Pyrrhus n’a pas séduit Andromaque, il l’a obtenue en butin. Andromaque, la victime, va recevoir le pouvoir sans l’avoir conquis. Quant à Hermione, elle est la fille de Ménélas, vainqueur de Troie et mari trompé. Fille de la loi bafouée, elle seule veut incarner la légalité de l’ordre ancien. Interprétée par un acteur, elle est violente, stérile et sans désir. Oreste en deviendra fou. Dans une ébauche de palais, digne d’un plateau de tournage, quatre créatures isolées sont à la recherche d’un centre de gravité. Les protagonistes de cette pièce ne sont que les héritiers des héros de la guerre de Troie. Une génération de nantis, d’enfants gâtés, désoeuvrés, sans perspective, qui se regardent vivre et souffrir. Leurs paroles sont davantage projetées que partagées, plus rien ne s’écoute dans la concurrence des larmes. </p>"+
    "<br>" +
    "<p><a href=http://www.theatredelacite.com/programme/damien-chardonnet-darmaillacq> Plus d'informations </a></p>"
  },

  carmens: {
    title: "<p class=\"has-text-centered\">Carmen(s) - José Montalvo</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Carmens.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Vendredi 23 février 2018, 20h00</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre national de Chaillot</strong></p>" +
    "<p class=\"has-text-centered\">Place du Trocadéro, Paris 16ème</p>" +
	"<p class=\"has-text-centered\">1h20</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Après Don Quichotte du Trocadéro (2013) et Y Olé ! (2015), pour ne citer que les plus récents, José Montalvo offre au public de Chaillot une nouvelle immersion dans son univers onirique où la danse dialogue avec les souvenirs personnels. Il a choisi la figure de Carmen déclinée au féminin pluriel. « J’aime Carmen parce que cette pièce solaire me permet de réfléchir à des questions qui me taraudent : l’immigration, les valeurs du métissage, l’enfance », avoue José Montalvo. Dans un monde inquiétant où le repli, l’exclusion et le rejet étendent leurs territoires, il voit en Carmen une compagne de lutte à l’image des grandes figures féminines du XXe siècle. Georges Bizet, le compositeur de l’opéra, qui n’a jamais mis les pieds en Espagne, fera du métissage artistique un hymne à la beauté. </p>"+ 
    "<br>" +
    "<p class=\"has-text-centered\">« Carmen est une explosion jubilatoire de vie et de rythmes. Une musique parcourue par un génie enfantin, d’une grande profondeur enjouée. Et un vrai défi pour une version chorégraphique.» </p>"+ 
    "<br>" +
    "<p><a href=http://theatre-chaillot.fr/jose-montalvo-carmen> Plus d'informations </a></p>"
  },

  concordanse: {
    title: "<p class=\"has-text-centered\">Concordan(s)e</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/concordanse.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Vendredi 16 mars, 19h00</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Carreau du Temple</strong></p>" +
    "<p class=\"has-text-centered\">4 Rue Eugène Spuller, Paris 3ème</p>" +
	"<p class=\"has-text-centered\">1h10</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Le Festival Concordan(s)e, c'est une rencontre inédite entre un chorégraphe et un écrivain. Ils vont découvrir leurs expériences respectives, cheminer ensemble pour nous dévoiler le fruit de leurs échanges, de ces croisements entre le geste et le mot. Le 16 mars, deux spectacles à décovurir !</p>"+ 
    "<br>" +
    "<p class=\"has-text-centered\"><strong>The Spleen, Frank Micheletti, chorégraphe & Charles Robinson, écrivain.</strong></p>"+ 
	"<p class=\"has-text-centered\">Nous ne sommes pas tranquilles avec les malheurs du monde. Nos corps incorporent des toxiques. Ils grouillent, râlent, protestent et craquent. Nos symptômes chantent avec les humiliés. Nous avons pourtant l’intuition d’autres possibles, où jouent les écosystèmes, les entrailles, les liens souples, les formes de vie, les escapades et les raccourcis.</p>"+ 
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Coalition, Mylène Benoit, chorégraphe & Frank Smith, écrivain</strong></p>"+ 
	"<p class=\"has-text-centered\"> Une pièce chorégraphique - Que peut un corps ?  Que peut le monde dans les corps ?  Comment dire les mouvements du monde dans les articulations des corps ?  Comment entrer entre le corps et le monde, entre les corps du monde et les pensées du corps ? Qu’est-ce qu’une combinaison danse / écriture ? Qu’est-ce qu’une combinaison matières de corps / mouvements ? Mylène Benoit et Frank Smith se rencontrent, croisent leurs pratiques et relient leurs préoccupations. Cet essai chorégraphique, textuel et musical soulève une série de questionnements afin de concilier le corps de la danse et le corps de l'écriture.</p>"+ 
    "<br>" +    
    "<p><a href=http://www.carreaudutemple.eu/concordanse-2018> Plus d'informations </a></p>"
  },

  attendant: {
    title: "<p class=\"has-text-centered\">En attendant le jour - François Sauveur</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/attendant.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Samedi 17 mars, 18h30</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Maison des Métallos</strong></p>" +
    "<p class=\"has-text-centered\">94 Rue Jean-Pierre Timbaud, Paris 11ème</p>" +
	"<p class=\"has-text-centered\">1h30</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Un jour de 2003, Luc Sauveur, médecin, entre dans la chambre de Marco. De but en blanc, celui-ci lui déclare qu’il veut mourir. Victime d’un grave accident de la route, il est totalement paralysé et souffre de terribles douleurs depuis plusieurs années. Marco réclame cette euthanasie qu’une loi toute récente vient de légaliser en Belgique. Le docteur Sauveur n’avait pas imaginé qu’il se retrouverait un jour confronté à une telle demande.</p>"+ 
   	"<br>" +
	"<p class=\"has-text-centered\">Cet appel à l’aide, cette rencontre bouleversante le pousse à se remettre en question sur son rôle de médecin. Treize ans plus tard, François Sauveur, comédien, musicien, metteur en scène et fils de Luc Sauveur, donne la parole à Marco, Jo et Marie-Rose qui ont tous décidé de mourir plutôt que de continuer à souffrir. Et il donne également la parole à son père, présent sur scène, pour qu’il puisse partager avec le public son expérience en tant que soignant.</p>"+ 
    "<br>" +    
    "<p><a href=http://www.maisondesmetallos.paris/2017/11/29/en-attendant-le-jour> Plus d'informations </a></p>"
  },
  
  potiers: {
    title: "<p class=\"has-text-centered\">Les Potiers et Western Dramedies - 2B Compagny</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/2B.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Vendredi 14 avril, 20h00</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Centre Pompidou</strong></p>" +
    "<p class=\"has-text-centered\">Place Georges-Pompidou, Paris 4ème</p>" +
	"<p class=\"has-text-centered\">1h00</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Tiphanie Bovay-Klameth, François Gremaud et Michèle Gurtner de la 2b company font une œuvre collective et expérimentale : « un retour conscient et réfléchi aux données de l’intuition », pour reprendre les mots d’Henri Bergson. Le trio revient au Centre Pompidou pour juxtaposer, en une seule et même soirée, deux pièces de leur répertoire : Western dramedies, un dépaysement théâtral absurde ancré dans le territoire d’une Amérique fantasmatique et décalée ; et Les Potiers, une comédie musicale où les protagonistes, accompagnés par un pianiste, chantent les riens qui façonnent leurs existences.</p>"+ 
   	"<br>" +   
    "<p><a href=https://www.centrepompidou.fr/cpv/ressource.action?param.id=FR_R-22fef7ecafefb451b2dbeabf5df8502f&param.idSource=FR_E-22fef7ecafefb451b2dbeabf5df8502f> Plus d'informations </a></p>"
  },

  tristesses: {
    title: "<p class=\"has-text-centered\">Tristesses - Anne-Cécile Vandalem</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Tristesses.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Dimanche 6 mai 2018, 14h30</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon</strong></p>" +
    "<p class=\"has-text-centered\">Place de l’Odéon, Paris 6ème</p>" +
	"<p class=\"has-text-centered\">2h10</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"> L’île est à peine imaginaire. Anne-Cécile Vandalem y a situé une fable pour notre temps. Martha Heiger, dirigeante du Parti du Réveil Populaire et favorite des prochaines élections, revient à Tristesses pour rapatrier le corps de sa mère sur le continent. Mais pourquoi Ida s’est-elle suicidée en se pendant au drapeau danois ? Et que manigance réellement sa fille ? Tristesses étant aussi un polar nordique, on n’en dévoilera pas plus ici, mais les maisons isolées sur la nuit du plateau sont le décor d’un drame où extérieurs en scène et intérieurs filmés alternent sur un rythme digne des meilleures séries. Enfin, Tristesses propose une réflexion sur la montée des populismes : selon Vandalem, “l’attristement des peuples” est aujourd’hui l’une des plus redoutables techniques de manipulation des esprits. Mais “les larmes”, ajoute-t-elle, “ont une puissance esthétique infinie”, indéterminable, et “les émotions peuvent être élan, moteur, énergie vive pour initier une prise de parole ou un acte”. </p>" + 
    "<br>" +
    "<p class=\"has-text-centered\">Cette énergie a conquis en 2016 le public du Festival d’Avignon : en exposant les mécanismes asservissants de la tristesse, l’artiste invite à ne pas leur succomber.</p>" + 
    "<br>" +
    "<p><a href=http://www.theatre-odeon.eu/fr/2017-2018/spectacles/tristesses> Plus d'informations </a></p>"
  },
  
  babarman: {
    title: "<p class=\"has-text-centered\">Babarman - La Compagnie du Zerep</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Babarman.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Samedi 26 mai 2018, 15h00</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Centre Pompidou</strong></p>" +
    "<p class=\"has-text-centered\">Place Georges-Pompidou, Paris 4ème</p>" +
	"<p class=\"has-text-centered\">1h00</p>" +
    "<br>" +
    "<p class=\"has-text-centered\"> Dans Babarman, Mon cirque pour un royaume, les facétieux Sophie Perez et Xavier Boussiron entraînent les plus jeunes sur scène. Sous un chapiteau, les enfants aident Babar, l’éléphant roi atteint d’une inquiétante perte de mémoire. Ils vont participer, jouer, chanter, se costumer, manger et boire, bref, imaginer le dénouement de l’histoire. </p>" + 
    "<br>" +
    "<p class=\"has-text-centered\"> Les adultes, installés dans la salle, voient l’envers du décor. Deux spectacles en un, pour un méli-mélo au millimètre qui interroge avec humour la rigidité des systèmes de référence propres à notre société.</p>" + 
    "<br>" +
    "<p><a href=https://www.centrepompidou.fr/cpv/ressource.action?param.id=FR_R-b0754923944b57b7be8dc7b563545c0&param.idSource=FR_E-b0754923944b57b7be8dc7b563545c0> Plus d'informations </a></p>"
  },

  avare: {
    title: "<p class=\"has-text-centered\">L'Avare - Ludovic Lagarde</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/Avare.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Samedi 2 juin 2018, 20h</strong></p>" +
    "<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon</strong></p>" +
    "<p class=\"has-text-centered\">Place de l’Odéon, Paris 6ème</p>" +
	"<p class=\"has-text-centered\">2h35</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Signé Ludovic Lagarde, voici un Avare de choc, bourreau des autres comme de soi-même, faisant le malheur de ses proches et la joie de ses spectateurs ! Avide autant qu’avare, Harpagon veut à la fois accumuler et retenir. Et surtout, ne pas consommer. Lagarde nous montre la demeure de son Harpagon quasiment sans mobilier, mais encombrée de containers prêts à être réexpédiés, en vertu de la loi du profit. Toute solidarité, tout lien familial ou social sont solubles dans l’or. Pour Harpagon, la richesse est faite pour disparaître au fond d’un trou noir, sans retour et sans fond, pareil à celui qu’il creuse au fond de son jardin pour y enfouir sa chère cassette. Tant pis pour les autres – et pour soi-même, car ce trou est aussi une fosse au fond de laquelle l’Avare creuse sa propre tombe...</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Comment donc en sortir ? Est-ce seulement possible ? Ludovic Lagarde met brillamment en relief les deux faces de L’Avare, sommet de la comédie noire. Comédie, car on n’échappe pas si facilement à la vitalité de la vie (même Harpagon songe à se remarier !). Noire, parce que l’Avare reste incurable : l’or lui tient lieu de corps, et la cassette de dernière demeure... Dès lors, quel avenir un tel homme peut-il laisser à ses enfants ? Et si son monde est bien le nôtre, quel visage voyons-nous dans le sombre miroir qu’il nous tend ?</p>" +
    "<br>" +
    "<p><a href=http://www.theatre-odeon.eu/fr/2017-2018/spectacles/l-avare> Plus d'informations </a></p>"
  },
  
  valises: {
        title: "<p class=\"has-text-centered\">On n'est pas que des valises - Hélène Desplanques</p>",
        content:
        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/valises.png\"></p>" +
        "<br>" +
        "<p class=\"has-text-centered\"><strong>vendredi 21 septembre, 19h30</strong></p>" +
        "<p class=\"has-text-centered\"><strong>Maison des Métallos</strong></p>" +
        "<p class=\"has-text-centered\">94 Rue Jean-Pierre Timbaud, 75011 Paris</p>" +
        "<p class=\"has-text-centered\">Durée du spectacle : 1h20</p>" +
		"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
        "<br>" +
        "<p>Incroyable épopée vécue par les ouvrières de Samsonite à Hénin-Beaumont. Leur usine a fermé. Liquidation totale, fraude… Elles refusent de baisser les bras et, avec l’aide de l’avocat Fiodor Rilov, attaquent en justice la multinationale et le fonds d’investissement américains. Une histoire vraie, un conte moderne. Ce sont les ouvrières elles-mêmes qui montent sur les planches pour nous raconter dix années d’une lutte emblématique, entre cour de justice, bus, avions et voyages en Amérique. Face à elles, Mitt Romney, star des marchés financiers américains et candidat à la Maison Blanche, incarne cet autre monde qu’elles doivent affronter.</p>" +
        "<br>" +
   	  "<p><a href=http://www.maisondesmetallos.paris/2018/05/24/on-n-est-pas-que-des-valises> Plus d'informations </a></p>"  
   },

   rosas: {
         title: "<p class=\"has-text-centered\">Rosas danst rosas - Anne Teresa de Keersmaeker</p>",
         content:
         "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/rosas.png\"></p>" +
         "<br>" +
         "<p class=\"has-text-centered\"><strong>dimanche 7 octobre, 16h</strong></p>" +
         "<p class=\"has-text-centered\"><strong>Centre National de la Danse</strong></p>" +
         "<p class=\"has-text-centered\">1 Rue Victor Hugo, 93507 Pantin</p>" +
         "<p class=\"has-text-centered\">Durée du spectacle : 1h35</p>" +
		 "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
         "<br>" +
         "<p>En 1983, Anne Teresa De Keersmaeker s’imposait sur la scène internationale avec Rosas danst Rosas, un spectacle devenu depuis lors une véritable référence dans l’histoire de la danse postmoderne. Rosas danst Rosas s’inscrit dans la veine minimaliste : des mouvements abstraits constituent la base d’un riche contrepoint chorégraphique dominé par la répétition. La véhémence expressive de ces mouvements est contredite par la trivialité des petits gestes quotidiens. Rosas danst Rosas est un spectacle essentiellement féminin : quatre danseuses « se dansent elles-mêmes » sans un seul instant de relâche. Leur obstination – jusqu’à l’épuisement – entre violemment en contraste avec l’impeccable structure formelle de la chorégraphie. Les boucles rythmiques – une musique répétitive qu’ils désignaient comme maximaliste – ont été composées durant le processus chorégraphique.</p>" +
         "<br>" +
   	  "<p><a href=https://www.cnd.fr/fr/program/940-rosas-danst-rosas> Plus d'informations </a></p>"   
  },

 	convivialite: {
 	        title: "<p class=\"has-text-centered\">La convivialité - Arnaud Hoedt & Jérôme Piron</p>",
 	        content:
 	        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/convivialite.png\"></p>" +
 	        "<br>" +
 	        "<p class=\"has-text-centered\"><strong>samedi 13 octobre, 19h</strong></p>" +
 	        "<p class=\"has-text-centered\"><strong>Le Monfort</strong></p>" +
 	        "<p class=\"has-text-centered\">106 Rue Brancion, 75015 Paris</p>" +
 	        "<p class=\"has-text-centered\">Durée du spectacle : 1h</p>" +
			"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
 	        "<br>" +
 	        "<p>Avec beaucoup d'humour, Jérôme Piron et Arnaud Hoedt prennent ici le contre-pied d'un sujet confisqué et trop souvent abandonné à une pensée élitiste ou académique. Dans un style pop et iconoclaste, les deux anciens professeurs de français portent un regard critique, rafraîchissant et décomplexant sur l'orthographe. Véritable passion pour les uns ou chemin de croix pour les autres, elle est sacrée pour tous.</p>" +
 	        "<br>" +
 	        "<p>Et pourtant, il ne s'agit peut-être que d'un énorme malentendu... Tout le monde a un avis sur la question.</p>" +
 	        "<br>" +
 	  	  "<p><a href=http://www.lemonfort.fr/programmation/la-convivialite_1> Plus d'informations </a></p>"   
 	  },

	venezuela: {
	        title: "<p class=\"has-text-centered\">Venezuela - Batsheva Dance Company</p>",
	        content:
	        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/venezuela.png\"></p>" +
	        "<br>" +
	        "<p class=\"has-text-centered\"><strong>dimanche 21 octobre, 15h</strong></p>" +
	        "<p class=\"has-text-centered\"><strong>Théâtre national de Chaillot</strong></p>" +
	        "<p class=\"has-text-centered\">1 Place du Trocadéro, 75016 Paris</p>" +
	        "<p class=\"has-text-centered\">Durée du spectacle : 1h20</p>" +
			"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	        "<br>" +
	        "<p>Dans Venezuela, créé en 2017, Ohad Naharin et ses danseurs explorent le dialogue tout autant que le conflit entre le mouvement et sa signification. Leurs armes ? Cette danse à l’énergie palpable qui abonde de sauts et d’ensembles, de corps secoués de soubresauts, de portés à bras-le-corps. Fidèle à son goût éclectique, Ohad Naharin a donné carte blanche à Maxim Waratt pour imaginer une bande-son comme un voyage entre les cultures. Des chants grégoriens, du rap (The Notorious B.I.G.) ou du rock (Rage Against the Machine) rythment le spectacle. L’urgence de cette gestuelle, les volte-face des interprètes qui passent en quelques secondes de la douceur à la virtuosité endiablée font de Venezuela une pièce à message. Ohad Naharin croit encore que le vivre ensemble est possible. Le plateau du théâtre devient sa tribune : mais pas de longs discours ici, juste la force et la générosité d’une compagnie plurielle. La danse a ce pouvoir, semble dire le chorégraphe, de réunir public et interprètes dans une même communion. L’art en mouvement.</p>" +
	        "<br>" +
	  	  "<p><a href=https://www.theatre-chaillot.fr/fr/saison-2018-2019/venezuela> Plus d'informations </a></p>"  
	   },
  
	milieuhiver: {
		title: "<p class=\"has-text-centered\">Au milieu de l'hiver j'ai découvert en moi un invincible été - Anaïs Allais</p>",
		content:
		        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/milieuhiver.png\"></p>" +
		        "<br>" +
		        "<p class=\"has-text-centered\"><strong>mercredi 7 novembre, 19h30</strong></p>" +
		        "<p class=\"has-text-centered\"><strong>Théâtre national de la Colline</strong></p>" +
		        "<p class=\"has-text-centered\">15 Rue Malte Brun, 75020 Paris</p>" +
		        "<p class=\"has-text-centered\">Durée du spectacle : 1h30</p>" +
				"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
		        "<br>" +
		        "<p>Anaïs Allais fait dialoguer, en miroir, les hommes, de l’Algérie à la France, des années 30 à nos jours. Partant de son grand-père, Abdelkader Benbouali, comme personnage de fiction, l’auteure metteure en scène tente de tirer les fils de cette histoire blessée, sur fond de colonisation et d’indépendance, de ces fêlures qui courent encore aujourd’hui aux deux rives de la Méditerranée.</p>" +
		        "<br>" +
		        "<p>Abdelkader Benbouali a été l’un des premiers footballeurs professionnels algériens français à poursuivre une carrière en métropole. Champion de France avec l’Olympique de Marseille en 1937, sélectionné dans l’équipe de France pour la Coupe du monde de 1938, il a fait ses armes au Racing universitaire d’Alger, comme un certain Albert Camus, avec qui il joua au poste de défense au début des années 30. La suite de l’histoire va les séparer, l’un connaîtra le succès que l’on sait, l’autre, exilé, restera dans l’ombre. Pendant la Seconde Guerre mondiale, Benbouali rentre en Algérie où il s’intéressera progressivement à la lutte indépendantiste algérienne et collaborera avec le FLN. En 1958, il est arrêté par les parachutistes français. Le lieutenant chargé de l’interroger était un supporteur inconditionnel de l’OM. L’attachement à son club de cœur se révélant plus fort que celui qu’il avait pour l’Algérie française, il s’abstint de le torturer. De nombreux Algériens n’auront pas cette chance.</p>" +
		        "<br>" +
		  	  "<p><a href=http://www.colline.fr/fr/spectacle/au-milieu-de-lhiver-jai-decouvert-en-moi-un-invincible-ete> Plus d'informations </a></p>"   
		  },

	ecolefemmes: {
		title: "<p class=\"has-text-centered\">L'école des femmes - Stéphane Brauschweig</p>",
		content:
		"<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/ecolefemmes.png\"></p>" +
		"<br>" +
		"<p class=\"has-text-centered\"><strong>dimanche 25 novembre, 14h30</strong></p>" +
		"<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon - 6ème</strong></p>" +
		"<p class=\"has-text-centered\">Place de l'Odéon, 75006 Paris</p>" +
		"<p class=\"has-text-centered\">Durée du spectacle : 2h</p>" +
		"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
		"<br>" +
		"<p>Lue d’aujourd’hui, L’École des femmes distille un fort malaise. Malaise devant la folie totalitaire d’Arnolphe, qui a tenu à l’écart du monde une jeune fille depuis ses quatre ans dans le projet de l’épouser; malaise devant l’ignorance de cette jeune fille, dont on ne sait si elle relève d’une inadaptation au monde ou d’une ruse de survie. Cette situation d’enfermement, à la fois physique et idéologique, est d’une violence rare; la cruauté qui en découle va peu à peu se retourner contre Arnolphe avec l’intensité des cauchemars. Toute la pièce se déroule devant la maison qui “abrite” Agnès. Mais Molière a ménagé de mystérieuses ellipses entre les actes, pour des scènes qui se passent dans le secret de la maison, et qui seront ensuite – plus ou moins…– racontées. Autant d’espaces de fantasme et d’appels à s’engouffrer dans le roman caché de la pièce. Au théâtre d’entrebâiller les volets fermés – pour découvrir peut-être une autre Agnès, celle qui échappe au fantasme d’Arnolphe – et de faire résonner le comique, aussi noir qu’étrange, de la folie moliéresque.</p>" +
		"<br>" +
		"<p><a href=http://www.theatre-odeon.eu/fr/saison-2018-2019/spectacles-1819/lecole-des-femmes> Plus d'informations </a></p>"   
	},
  
	desobeir: {
	      title: "<p class=\"has-text-centered\">Désobéir - Julie Bérès</p>",
	      content:
	      "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/desobeir.png\"></p>" +
	      "<br>" +
	      "<p class=\"has-text-centered\"><strong>vendredi 30 novembre, 19h30</strong></p>" +
	      "<p class=\"has-text-centered\"><strong>Théâtre de la Cité Internationale</strong></p>" +
	      "<p class=\"has-text-centered\">17 Boulevard Jourdan, 75014 Paris</p>" +
	      "<p class=\"has-text-centered\">Durée du spectacle : 1h15</p>" +
		  "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	      "<br>" +
	      "<p>Souvenirs de soumissions, de révoltes, expression de désirs ou d’impasses, quatre jeunes femmes de la banlieue témoignent de leur vie, de leur condition. Elles sont souvent drôles et toujours touchantes dans la jubilation partagée de leurs confessions. On comprend vite que derrière une ambivalente nostalgie, elles cherchent surtout à s’inventer en livrant une expérience vivante qui pulvérise les lieux communs.</p>" +
	      "<br>" +
		  "<p><a href=http://www.theatredelacite.com/programme/desobeir> Plus d'informations </a></p>"   
	  },
	  
	  tousoiseaux: {
	        title: "<p class=\"has-text-centered\">Tous des oiseaux - Wajdi Mouawad</p>",
	        content:
	        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/tousoiseaux.png\"></p>" +
	        "<br>" +
	        "<p class=\"has-text-centered\"><strong>samedi 8 décembre, 19h</strong></p>" +
	        "<p class=\"has-text-centered\"><strong>Théâtre national de la Colline</strong></p>" +
	        "<p class=\"has-text-centered\">15 Rue Malte Brun, 75020 Paris</p>" +
	        "<p class=\"has-text-centered\">Durée du spectacle : 4h</p>" +
			"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	        "<br>" +
	        "<p>Tous des oiseaux a pour source la rencontre entre un auteur québécois d’origine libanaise vivant en France et une historienne juive ayant contribué à faire connaître un diplomate musulman qui fut converti de force au christianisme et qui permit à tout un continent de découvrir la vision qu’un Africain avait de son pays natal. On appelle cela une rencontre avec l’idée absolue de l’Autre.</p>" +
	        "<br>" +
	        "<p>Dynamitée par la violence du monde, l'histoire intime d'Eitan, un jeune scientifique allemand d'origine israélienne confronté à un violent conflit avec son père, montre comment, dans les luttes fratricides, il n'existe aucune réalité qui puisse dominer une autre. Tout conflit cache un labyrinthe où va, effroyable, le monstre aveugle des héritages oubliés.</p>" +
	        "<br>" +
	  	  "<p><a href=http://www.colline.fr/fr/spectacle/tous-des-oiseaux> Plus d'informations </a></p>"   
	  },

rituel: {
	title: "<p class=\"has-text-centered\">Rituel : Le grand débat - Louise Hémon & Emilie Rousset</p>",
	content:
	"<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/rituel.png\"></p>" +
	"<br>" +
	"<p class=\"has-text-centered\"><strong>samedi 15 décembre, 18h30</strong></p>" +
	"<p class=\"has-text-centered\"><strong>Théâtre de la Cité Internationale</strong></p>" +
	"<p class=\"has-text-centered\">17 Boulevard Jourdan, 75014 Paris</p>" +
	"<p class=\"has-text-centered\">Durée du spectacle : 1h20</p>" +
	"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	"<br>" +
	"<p>Un débat télévisé du second tour des élections présidentielles est créé sur scène à partir d’archives de 1974 à 2017. Sous l’œil du public et des caméras, Emmanuelle Lafon et Laurent Poitrenaux rejouent ces fragments sur un plateau télé dont les images, montées en direct, sont projetées sur un écran au-dessus d’eux. Avec ses règles très codifiées, cet ultime débat est un véritable rituel moderne. Entre rituel de la démocratie et de la télévision, la frontière est trouble.</p>" +
	"<br>" +
	"<p><a href=http://www.theatredelacite.com/programme/le-grand-debat> Plus d'informations </a></p>"   },

	arctique: {
	      title: "<p class=\"has-text-centered\">Arctique - Anne-Cécile Vandalem</p>",
	      content:
	      "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/arctique.png\"></p>" +
	      "<br>" +
	      "<p class=\"has-text-centered\"><strong>samedi 26 janvier, 19h30</strong></p>" +
	      "<p class=\"has-text-centered\"><strong>Théâtre de l'Odéon - 17ème</strong></p>" +
	      "<p class=\"has-text-centered\">1 Rue André Suares, 75017 Paris</p>" +
	      "<p class=\"has-text-centered\">Durée du spectacle : 2h10</p>" +
		  "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	      "<br>" +
	      "<p>Nous sommes en 2025. Demain a déjà commencé. Le réchauffement climatique a fait du Groenland le dernier Eldorado. Libérées par la fonte de la calotte glaciaire, ses formidables réserves d’uranium, de terres rares, de gaz et de pétrole aiguisent les appétits. À bord de l’Arctic Serenity, ancien navire de croisière remorqué vers l’île pour y être transformé en hôtel de luxe, quelques passagers clandestins se sont glissés dans l’espoir de fuir une Europe ravagée par les guerres. Mais le remorqueur abandonne l’Arctic Serenity dans les eaux internationales. Dès lors, rien ne se passe comme prévu. Aux sons d’un mystérieux orchestre, les émigrants du vieux monde partent à la dérive... Comédie futuriste, Arctique, comme Tristesses (le précédent spectacle d’Anne-Cécile Vandalem situé dans un Danemark imaginaire, et qui fut présenté la saison passée à l’Odéon), est à la fois un polar nordique et un thriller politique. Un contrepoint virtuose de théâtre et de vidéo expose les multiples facettes d’un huis-clos maritime à rebondissements, avec vengeances, secrets brusquement dévoilés, personnages lynchiens à double ou triple fond, surgissements de spectres et renversements d’alliances, qui tient en haleine tout en élargissant les perspectives.</p>" +
	      "<br>" +
		  "<p><a href=http://www.theatre-odeon.eu/fr/saison-2018-2019/spectacles-1819/arctique> Plus d'informations </a></p>"   
	  },

gravite: {
	title: "<p class=\"has-text-centered\">Gravité - Angélin Prejlocaj</p>",
	content:
	"<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/gravite.png\"></p>" +
	"<br>" +
	"<p class=\"has-text-centered\"><strong>jeudi 21 février, 19h</strong></p>" +
	"<p class=\"has-text-centered\"><strong>Théâtre national de Chaillot</strong></p>" +
	"<p class=\"has-text-centered\">1 Place du Trocadéro, 75016 Paris</p>" +
	"<p class=\"has-text-centered\">Durée du spectacle : 1h20</p>" +
	"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	"<br>" +
	"<p>Invisible, impalpable, immanente : la gravitation selon Angelin Preljocaj est un phénomène aussi essentiel que mystérieux. Pour le questionner, sa nouvelle création puise aux fondamentaux de sa danse.</p>" +
	"<br>" +
	"<p>Depuis des années, les notions de poids, d’espace, de vitesse, de masse, traversent « de façon intuitive » les ballets d’Angelin Preljocaj. Même si, fidèle à sa règle, le chorégraphe alterne depuis trente ans « des pièces de recherche pure et des ballets plus narratifs », ces thèmes immatériels sont les fils continus de son parcours. Avec Gravité, il signe une pièce résolument « abstraite » qui, en explorant les lois universelles de l’attraction des masses entre elles, remonte aux sources de son écriture gestuelle. « Du plus léger au plus massif », il invente pour chaque degré de résistance de l’air une suite de mouvements spécifiques. Chaque séquence est mise en relation avec une oeuvre musicale, dans un large éventail de timbres et de rythmes qui va de Gérard Grisey à Dmitri Chostakovitch en passant par Jean-Sébastien Bach. Aux théories scientifiques de Newton et d’Einstein répondent ainsi « les sensations corporelles et spatiales » des danseurs, dans une véritable « odyssée » charnelle et cosmique.</p>" +
	"<br>" +
	"<p><a href=https://www.theatre-chaillot.fr/fr/saison-2018-2019/gravite> Plus d'informations </a></p>"   
},

felures: {
      title: "<p class=\"has-text-centered\">Félures - D' de Kabal</p>",
      content:
      "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/felures.png\"></p>" +
      "<br>" +
      "<p class=\"has-text-centered\"><strong>vendredi 22 mars, 19h30</strong></p>" +
      "<p class=\"has-text-centered\"><strong>Théâtre national de la Colline</strong></p>" +
      "<p class=\"has-text-centered\">15 Rue Malte Brun, 75020 Paris</p>" +
      "<p class=\"has-text-centered\">Durée du spectacle : (en attente)</p>" +
	  "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
      "<br>" +
      "<p>Rappeur, slameur, écrivain, metteur en scène, D' de Kabal arpente depuis près de vingt ans les scènes musicales, les festivals, les théâtres et les ateliers d'écriture. Après s'être longtemps intéressé à la figure de la victime d'actes ou de propos raciste, il explore à présent un autre champ de pensée tout aussi proche de lui-même, la notion de masculinité et en creux, la part de féminité que tout homme porte en lui. Comme souvent dans son processus d'écriture, D de Kabal écoute, se documente, il s'appuie sur des entretiens de specialistes, des ateliers de parole qu'il appelle laboratoires de déconstruction et de redéfinition du masculin par l'Art et le Sensible.</p>" +
      "<br>" +
	  "<p><a href=0> Plus d'informations </a></p>"  
   },
	  
toutdosto: {
	title: "<p class=\"has-text-centered\">Tout Dostoïevski - Benoît Lambert & Emmanuel Vérité</p>",
	content:
	"<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/dosto.png\"></p>" +
	"<br>" +
	"<p class=\"has-text-centered\"><strong>vendredi 12 avril, 0</strong></p>" +
	"<p class=\"has-text-centered\"><strong>Théâtre de la Cité Internationale</strong></p>" +
	"<p class=\"has-text-centered\">17 Boulevard Jourdan, 75014 Paris</p>" +
	"<p class=\"has-text-centered\">Durée du spectacle : 1h</p>" +
	"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	"<br>" +
	"<p>Charles Courtois-Pasteur, plus connu sous le nom de Charlie, est un personnage inclassable, un rêveur flamboyant, imbibé de littérature et de cinéma, plutôt porté sur l’élégance. Il chérit l’œuvre de Dostoïevski, dont il sait extraire une quintessence qui parle à tous. De Crime et Châtiment aux Frères Karamazov, le vagabondage dans les émotions procurées par ses lectures avive notre désir d’y (re)plonger.</p>" +
	"<br>" +
	"<p><a href=http://www.theatredelacite.com/programme/tout-dostoievski> Plus d'informations </a></p>"  
 },	  

 vueslumiere: {
       title: "<p class=\"has-text-centered\">Vues lumière - Isabelle Lafon</p>",
       content:
       "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/vueslumiere.png\"></p>" +
       "<br>" +
       "<p class=\"has-text-centered\"><strong>jeudi 16 mai, 19h30</strong></p>" +
       "<p class=\"has-text-centered\"><strong>Théâtre national de la Colline</strong></p>" +
       "<p class=\"has-text-centered\">15 Rue Malte Brun, 75020 Paris</p>" +
       "<p class=\"has-text-centered\">Durée du spectacle : 1h</p>" +
	   "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
       "<br>" +
       "<p>Que nous révèle et que nous cache ce groupe composé de cinq femmes et d'un homme ? Esther est employée omme agente de service dans une cantine scolaire, Fonfon est mécanicienne, Irène travaille comme agente d'entretien dans des entreprises, Georges est ouvrière paysagiste pour la Ville de Paris, Shali est assistante maternelle et Martin est veilleur de nuit dans un hôtel. Tous décident de se réunir de façon hebdomadaire dans un centre social de l'Est parisien.</p>" +
       "<br>" +
 	  "<p><a href=0> Plus d'informations </a></p>" 
     },
	 
	 absolu: {
	       title: "<p class=\"has-text-centered\">L'Absolu - Boris Gibé</p>",
	       content:
	       "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/absolu.png\"></p>" +
	       "<br>" +
	       "<p class=\"has-text-centered\"><strong>jeudi 23 mai, 0</strong></p>" +
	       "<p class=\"has-text-centered\"><strong>Théâtre de la Cité Internationale</strong></p>" +
	       "<p class=\"has-text-centered\">17 Boulevard Jourdan, 75014 Paris</p>" +
	       "<p class=\"has-text-centered\">Durée du spectacle : 1h</p>" +
		   "<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
	       "<br>" +
	       "<p>Posé dans le parc, au pied du Bar du Théâtre, le Silo de 12 m de haut répartit les places sur un escalier à double révolution. Dans le vide central, Boris Gibé affronte le vertige de l’absolu. Celui que l’artiste tente d’atteindre en se battant contre lui-même. « L’art porte en lui-même la nostalgie de l’idéal » écrit le cinéaste Andreï Tarkovski dans Le Temps scellé, livre qui a amplement nourri cette nouvelle création. La chorégraphie aérienne de l’acrobate nous envahit d’impressions visuelles, sensitives et émotives. Boris Gibé possède la poésie du mouvement à l’état brut et transmute le trou noir en un puit à images. Il endosse le risque pour déclencher en chacune des cent personnes assises en sécurité, une profonde aspiration à être, une aptitude à discerner zones d’ombre et part de flamboyance.</p>" +
	       "<br>" +
	 	  "<p><a href=http://www.theatredelacite.com/programme/boris-gibe> Plus d'informations </a></p>"   },

		  frozen: {
		        title: "<p class=\"has-text-centered\">Frozen Songs - Zero visibility corp.</p>",
		        content:
		        "<p class=\"has-text-centered\"><img height=\"300px\" src=\"assets/images/pieces/frozen.png\"></p>" +
		        "<br>" +
		        "<p class=\"has-text-centered\"><strong>mercredi 12 juin, 20h</strong></p>" +
		        "<p class=\"has-text-centered\"><strong>Théâtre national de Chaillot</strong></p>" +
		        "<p class=\"has-text-centered\">1 Place du Trocadéro, 75016 Paris</p>" +
		        "<p class=\"has-text-centered\">Durée du spectacle : 1h30</p>" +
				"<p class=\"has-text-centered\">Le spectacle sera précédé et suivi d'interventions.</p>" +
		        "<br>" +
		        "<p>Sons cristallins et crissants tintent pour ce duo, enlacé devant une paroi qui semble de glace. Atmosphères paisibles, éclairs apocalyptiques, pulsations primitives : peu à peu la terre s’ensemence d’espoir. Venus de Norvège et d’ailleurs, sept danseurs déploient une constellation chorégraphique expressive, en constant écho avec la composition musicale élaborée par le duo électro belge Stray Dogs et la création multimédia, conçue par les vidéastes chinois Feng Jiangzhou et Zhang Lin. Dans ces climats visuels et sonores tourmentés, une communauté obstinée danse, dans l’urgence, pour la survie. Concernée par le dérèglement climatique et le déclin de la biodiversité, Ina Christel Johannessen a effectué un séjour de recherche dans l’archipel arctique du Svalbard. Là, il existe un lieu souterrain où l’origine et l’avenir du monde sont ensilés, où plus de 900 000 semences des cultures vivrières de la planète entière sont stockées. Pour la préservation de la diversité génétique, pour la survie de l’espèce humaine ? Frozen Songs sème l’espoir.</p>" +
		        "<br>" +
		  	  "<p><a href=https://www.theatre-chaillot.fr/fr/saison-2018-2019/frozen-songs> Plus d'informations </a></p>"   },

  cartecolline: {
    title: "<p class=\"has-text-centered\">Théâtre national de la Colline</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"100px\" src=\"assets/images/partenaires_vert/Colline_v.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Pour réserver ta place, envoie par mail à reservations@kudakude.com :</p>" +
    "<br>" +
    "<p class=\"has-text-centered\">👉 ton nom</p>" + 
	"<p class=\"has-text-centered\">👉 ton prénom</p>" + 
	"<p class=\"has-text-centered\">👉 ton numéro de carte autonomie</p>" + 
	"<p class=\"has-text-centered\">👉 ton association partenaire</p>" +  
	"<p class=\"has-text-centered\">👉 la pièce, la date et le nombre de places</p>" + 
	"<br>" +
	"<p class=\"has-text-centered\">Nous te confirmerons ta réservation par retour de mail.</p>" +
    "<br>" +
    "<p><a href=http://www.colline.fr/> Tout savoir sur la programmation de la Colline.</a></p>"
  },
  
  carteTCI: {
    title: "<p class=\"has-text-centered\">Théâtre national de la Colline</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"100px\" src=\"assets/images/partenaires_vert/CiteU_v.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Toutes les infos très prochainement !</strong></p>" + 
    "<br>" +
    "<p><a href=http://www.theatredelacite.com/> Tout savoir sur la programmation du Théâtre de la Cité Internationale.</a></p>"
  },
  
  carteodeon: {
    title: "<p class=\"has-text-centered\">Théâtre national de l'Odéon</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"100px\" src=\"assets/images/partenaires_vert/Odeon_v.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Grâce à notre partenariat avec l'Odéon, tu peux bénéficier de places à <strong>8€ troisième série dans le 6ème et en 2ème série à Berthier (17ème)</strong>.</p>" + 
    "<br>" + 
	"<p class=\"has-text-centered\">Pour en bénéficier, il te suffit de contacter la billetterie par téléphone 01 44 85 40 40 ou aller sur le <a href=http://www.odeon.fr/>site du théâtre</a></p>" + 
    "<br>" + 
	"<p class=\"has-text-centered\">Ta carte Autonomie te sera demandée au guichet le soir du spectacle lorsque tu retireras ta place !</p>" + 
    "<br>" +
    "<p class=\"has-text-centered\"> Si tu as la moindre question, n'hésite pas à contacter Clémence (clemence.bordier@theatre-odeon.fr) ou Coralba (coralba.marrocco@theatre-odeon.fr).</p>" + 
    "<br>" +
    "<p><a href=http://www.theatre-odeon.eu> Tout savoir sur la programmation de l'Odéon.</a></p>"
  },
  
  cartemonfort: {
    title: "<p class=\"has-text-centered\">Théâtre Le Monfort</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"100px\" src=\"assets/images/partenaires_vert/Monfort_v.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Grâce à notre partenariat avec Le Monfort, tu peux bénéficier de places à <strong>5€ pour tous les spectacles, pour toi et deux accompagnateurs </strong>!</p>" + 
    "<br>" +
    "<p class=\"has-text-centered\">Pour réserver ta place, contacte Chloé (chloe.bourret@lemonfort.fr, 01 56 08 33 46, 06 68 16 64 11 ) qui s'occupera de tout.</p>" + 
    "<br>" +
    "<p><a href=http://www.lemonfort.fr/> Tout savoir sur la programmation du Monfort.</a></p>"
  },
  
  cartemm: {
    title: "<p class=\"has-text-centered\">Maison des Métallos</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"100px\" src=\"assets/images/partenaires_vert/MM_v.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Grâce à notre partenariat avec la Maison des Métallos, tu peux bénéficier de places à <strong>5€ pour tous les spectacles, pour toi, et une personne qui t'accompagne !</strong></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Le réglement de tes places se fera au guichet du théâtre, le jour du spectacle, sur présentation de ta carte autonomie.</strong></p>" + 
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Pour réserver une pièce à la Maison des Métallos, envoie un mail à contact@kudakude.com  en mentionannt : </strong></p>" + 
    "<br>" +
    "<p class=\"has-text-centered\">👉 ton nom</p>" + 
	"<p class=\"has-text-centered\">👉 ton prénom</p>" + 
	"<p class=\"has-text-centered\">👉 ton numéro de carte autonomie</p>" + 
	"<p class=\"has-text-centered\">👉 ton association partenaire</p>" +  
	"<p class=\"has-text-centered\">👉 la pièce, la date et le nombre de places</p>" + 
    "<br>" +
    "<p><a href=https://www.maisondesmetallos.paris/> Tout savoir sur la programmation de la Maison des Métallos.</a></p>"
  },
  
  atelier: {
    title: "<p class=\"has-text-centered\">Atelier théâtre - Improvisation</p>",
    content:
    "<p class=\"has-text-centered\"><img height=\"200px\" src=\"assets/images/pieces/atelier.png\"></p>" +
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Le dimanche 27 janvier</strong></p>" +
    "<p class=\"has-text-centered\"><strong>de 14h à 17h</strong></p>" +
    "<p class=\"has-text-centered\">Théâtre de l'Odéon 6ème</p>" +
    "<p class=\"has-text-centered\">Place de l'Odéon</p>" +
	"<br>" +
    "<p class=\"has-text-centered\">Théâtre, ça veut dire discipline, sueur, fatigue, répétitions en boucle…mais pas que ! Le théâtre c’est aussi la joie de la création. Par quel moyen ? à travers l’improvisation bien sûr !</strong></p>" +
    "<br>" +
    "<p class=\"has-text-centered\">Cet atelier qui réunira une quinzaine de personnes (dont des lycéens d'Ambition Campus) pendant trois heures, aura pour but de découvrir les principes de base du théâtre et de l’impro, pour se lâcher, exprimer toute sa créativité et « jouer le jeu ». Peu importe que vous soyez débutants, amateurs ou pro, l’improvisation est accessible à tout le monde, de façon amusante et festive.</strong></p>" + 
    "<br>" +
    "<p class=\"has-text-centered\"><strong>Alors, rejoignez Silvia, notre super intervenante Kudakude déjà rompue à l'exercice pour cette expérience ! En plus, l'atelier aura lieu dans un des studios du théâtre de l'Odéon ! </strong></p>" + 
    "<br>"
  },


};

function showPlayModal(play) {
  document.getElementById('play-modal').classList.add('is-active');
  document.getElementById('play-modal__title').innerHTML = playModal[play].title;
  document.getElementById('play-modal__content').innerHTML = playModal[play].content;
}

function hidePlayModal() {
  document.getElementById('play-modal').classList.remove('is-active');
}

/**
 * Creates a carousel on given element.
 *
 * @param {HTMLElement} carouselElement - html element to render carousel
 * @param {Object} siemaOptions - Siema options of carousel
 * @param {HTMLElement} [controlsElement] - html element to render carousel controls (if not given, no controls)
 * @param {Object} [controlsOptions] - some custom options
 * @param {boolean} [controlsOptions.prevNextButtons=false] - show buttons to go to next / previous slide
 * @param {number} [controlsOptions.loopDuration=0] - number of milliseconds before changing slide automatically
 * (if 0, no automatic loop)
 */


function setUpCarousel(carouselElement, siemaOptions, controlsElement, controlsOptions) {
  var pageCount = carouselElement.children.length / (siemaOptions.perPage || 1);
  if (pageCount > 1) {
    siemaOptions = Object.assign({}, {
      selector: carouselElement,
      duration: 500,
      draggable: true,
      loop: true,
      onInit: function () {
        var carousel = this;
        if (controlsOptions && controlsOptions.loopDuration > 0) {
          setInterval(function () {
            carousel.next();
            renderControls(carousel);
          }, controlsOptions.loopDuration);
        }
        renderControls(carousel);
      }
    }, siemaOptions);

    new Siema(siemaOptions);
  }

  //////////

  function renderControls(carousel) {
    if (!controlsElement) {
      return;
    }

    controlsElement.innerHTML = '';

    var className = undefined;

    if (controlsOptions && controlsOptions.prevNextButtons) {
      controlsElement.appendChild(createControl('fa-chevron-left', function () {
        carousel.prev();
        renderControls(carousel);
      }));
    }

    for (var i = 0; i < pageCount; i++) {
      className = i === carousel.currentSlide ? 'fa-circle' : 'fa-circle-o';
      controlsElement.appendChild(createControl(className, createGoToFunction(carousel, i)));
    }

    if (controlsOptions && controlsOptions.prevNextButtons) {
      controlsElement.appendChild(createControl('fa-chevron-right', function () {
        carousel.next();
        renderControls(carousel);
      }));
    }
  }

  function createControl(className, clickListener) {
    var control = document.createElement('i');
    control.className = 'fa ' + className;
    control.addEventListener('click', clickListener);
    return control;
  }

  function createGoToFunction(carousel, index) {
    return function () {
      carousel.goTo(index);
      renderControls(carousel);
    };
	
  }
}

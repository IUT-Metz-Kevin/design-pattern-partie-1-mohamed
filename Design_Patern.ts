class ParametresJeu {
    private static instance: ParametresJeu;
    private parametres: Map & lt;string, any & gt; = new Map();
    private constructor() { }
    static getInstance(): ParametresJeu {
    if (!this.instance) {
        this.instance = new ParametresJeu();
    }
    return this.instance;
}
setParametre(cle: string, valeur: any) {
    this.parametres.set(cle, valeur);
}
getParametre(cle: string): any {
    return this.parametres.get(cle);
}
    }
// Utilisation
const config = ParametresJeu.getInstance();
config.setParametre(& quot; langue & quot;, & quot; français & quot;);
config.setParametre(& quot; volume & quot;, 80);
console.log(config.getParametre(& quot; langue & quot;)); // français

////////

class Departement {
    private enfants: Departement[] = [];
    constructor(public nom: string) { }
    ajouter(departement: Departement) {
        this.enfants.push(departement);
    }
    afficher(indent: string = & quot;&quot;) {
        console.log(indent + this.nom);
        this.enfants.forEach(child =& gt; child.afficher(indent + & quot; & quot;));
    }

}
// Utilisation
const direction = new Departement(& quot;Direction Générale & quot;);
const tech = new Departement(& quot;Département Technique & quot;);
const it = new Departement(& quot; IT & quot;);
const web = new Departement(& quot; Web & quot;);
direction.ajouter(tech);
tech.ajouter(it);
tech.ajouter(web);
direction.afficher();

///////

interface ControleActions {
    sauter(): void;
    attaquer(): void;
    interagir(): void;
}
class Clavier implements ControleActions {
    sauter() { console.log(& quot;Espace pour sauter & quot;); }
    attaquer() { console.log(& quot;Clic gauche pour attaquer & quot;); }
    interagir() { console.log(& quot;Clic droit pour interagir & quot;); }
}
class ManetteXbox {
    boutonA() { console.log(& quot;A pour sauter & quot;); }
    boutonB() { console.log(& quot;B pour attaquer & quot;); }
    boutonX() { console.log(& quot;X pour interagir & quot;); }
}
class AdaptateurXbox implements ControleActions {
    constructor(private manette: ManetteXbox) { }
    sauter() { this.manette.boutonA(); }
    attaquer() { this.manette.boutonB(); }
    interagir() { this.manette.boutonX(); }
}
// Utilisation
const clavier = new Clavier();
const xbox = new AdaptateurXbox(new ManetteXbox());
clavier.sauter();
xbox.sauter();

//////

interface Boisson {
    getDescription(): string;
    getPrix(): number;
}
class Cafe implements Boisson {
    getDescription() { return & quot; Café & quot;; }
    getPrix() { return 4; }
}
class DecorateurBoisson implements Boisson {
    constructor(protected boisson: Boisson) { }
    getDescription() { return this.boisson.getDescription(); }
    getPrix() { return this.boisson.getPrix(); }
}
class Lait extends DecorateurBoisson {
    getDescription() { return this.boisson.getDescription() + & quot;, Lait & quot;; }
    getPrix() { return this.boisson.getPrix() + 1; }
}
// Utilisation
const boisson = new Lait(new Cafe());
console.log(boisson.getDescription()); // Café, Lait
console.log(boisson.getPrix()); // 5

//////

interface Personnage {
    attaquer(): void;
}
class Guerrier implements Personnage {
    attaquer() { console.log(& quot;Le Guerrier attaque avec une épée! & quot;); }
}
class PersonnageFactory {
    static creerPersonnage(type: string): Personnage {
        if (type === & quot; Guerrier & quot;) return new Guerrier();
        throw new Error(& quot;Type inconnu & quot;);
    }
}
// Utilisation
const guerrier = PersonnageFactory.creerPersonnage(& quot; Guerrier & quot;);
guerrier.attaquer();
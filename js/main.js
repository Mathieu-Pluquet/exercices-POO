// exercice1

var user = {
    prenom:"John",
    nom:"Doe",
    pays:"france",
    age:50,
    carte:["mastercard","visa"],
    getName: function() {
    alert(this.prenom);
  },
  getPrenom: function() {
    user.getName();
  },
  getNom: function(){
    alert(this.nom);
  },
  getAge: function(){
    alert(2017-this.age)
  },
};
user.getName();
user.getNom();
user.getAge();

var site = {
  pays: ["FRANCE","BELGIQUE","ESPAGNE"],
  carte:["MASTERCARD","VISA"],
  age:17
};

if (user.age>site.age) {
  alert("bienvenue copain")
}
else {
  alert("au revoir copain")
}

for (i=0; i<site.pays.length;i++) {
  if (user.pays.toUpperCase() == site.pays[i]) {
    alert("pays ok")
  }
}
var compt=0
for (i=0; i < user.carte.length; i++)
{
    for (j=0; j < site.carte.length; j++)
    {
        if (user.carte[i].toUpperCase() == site.carte[j].toUpperCase())
        {
          compt++
        }
    }
}
if (compt>0){
  alert("gg carte")
}


// exercice2

function combattant (nom, atk, def, hp) {
  this.nom=nom;
  this.atk=atk;
  this.def=def;
  this.hp=hp;
  this.getName = function(adv) {
  alert(adv.nom + " attaque " + this.nom + " il lui reste " + (this.hp=(this.hp - adv.atk)) + " hp");
 };
}

function magicien (nom, atk, def, hp, mana) {
  this.nom=nom;
  this.atk=atk;
  this.def=def;
  this.hp=hp;
  this.mana=mana;

  this.getmagie= function() {
    if (mana<10) {
      alert("tu ne peut pas te heal")
    }
    else {
      alert(nom + " se soigne et a " + (this.mana-10 && this.hp+10) + " hp");
    }
  }
  this.getmage = function(adv) {
  alert(adv.nom + " attaque " + nom + " il lui reste " + (this.hp=(this.hp - adv.atk)) + " hp")
 };
 this.getatk = function(adv) {
   alert(nom + " attaque " + adv.nom + " il lui reste " + (adv.hp=(adv.hp - this.atk)) + " hp")
 }
};

var aaron = new combattant("aaron",50,100,1000);
var ben = new combattant("ben",100,100,1500);
var math = new magicien("math",100,100,800,100);

ben.getName(aaron);
aaron.getName(ben);
math.getmage(ben);
math.getmage(aaron);
math.getmagie();
math.getatk(ben);

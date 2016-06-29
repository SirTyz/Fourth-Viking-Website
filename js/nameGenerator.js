$(document).ready(function(){
  //Creates a male name on press
  $("#inputButtonM").click(function(){
        $(".randomNameInfo").html(function(){
          var firstName = [
            "Bjorn",
            "Thomas",
            "Till",
            "Silvester",
            "Lucas",
            "George",
            "Axel",
            "Tillmann",
            "Alexander",
            "Ludwig",
            "Ustin",
            "Maxim",
            "Stefan",
            "Bogdan",
            "Luka",
            "Otbert",
            "Vigor",
            "Thegan",
            "Garivald",
            "Fulrad",
            "Razo",
            "Wulfram",
            "Leuthard",
            "Turpin",
            "Otto",
            "Fulk",
            "Hubert",
            "Clovis",
            "Odo",
            "Anno",
            "Karlmann",
            "Anskar",
            "Folmar",
            "Tihomir",
            "Vlad",
            "Wella",
            "Gunteric",
            "Colias",
            "Rikiar",
            "Galindus",
            "Mundo",
            "Alaric",
            "Aligern",
            "Rodolf",
            "Eberwolf",
            "Salla",
            "Borani",
            "Bilimer",
            "Duda",
            "Agila",
            "Totila",
            "Odoin",
            "Huml",
            "Ibba",
            "Ovida",
            "Saphrax",
            "Dins",
            "Salvis",
            "Albins",
            "Egils",
            "Nocler",
            "Zuba",
            "Fograal",
            "Odlec",
            "Sokolt",
            "Kralca",
            "Stutra",
            "Muallor",
            "Dizoc",
            "Koveen",
            "Liazu",
            "Enad",
            "Suneld",
            "Derkay",
            "Asrall",
            "Kraice",
            "Dobroka",
            "Stilmul",
            "Enza",
            "Logac",
            "Okeak",
            "Aryer",
            "Hendla",
            "Drurna",
            "Thaiva",
            "Marua",
            "Kriskar",
            "Bultalt",
            "Chatar",
            "Drimi",
            "Geiblor",
            "Cothmand",
            "Dulwal",
            "Strizast",
            "Ebe",
            "Tholuk",
            "Tilcas",
            "Undlo",
            "Nultad",
            "Bruson",
            "Gritri"


          ];

          var lastName = [
            "Wolfsohn",
            "Gerster",
            "Korsch",
            "Beer",
            "Heidler",
            "Strier",
            "Teyber",
            "Traub",
            "Dorn",
            "Wernz",
            "Hersh",
            "Wexner",
            "Scheck",
            "Hopfer",
            "Hoger",
            "Hagel",
            "Scheck",
            "Drossel",
            "Voigt",
            "Horstmann",
            "Martin",
            "Apel",
            "Ober",
            "Schultz",
            "Heller",
            "Heim",
            "Dahmen",
            "Rosin",
            "Wahl",
            "Mayr",
            "Steinberg",
            "Denker",
            "Haass",
            "Elser",
            "Blatt",
            "Dullum",
            "Norberg",
            "Baardsen",
            "Vee",
            "Salmonsen",
            "Ohlsen",
            "Opsal",
            "Danielsen",
            "Lovland",
            "Jorstad",
            "Ulberg",
            "Lybeck",
            "Underberg",
            "Asplund",
            "Nystrom",
            "Backer",
            "Sabo",
            "Selvig",
            "Overbey",
            "Bentzen",
            "Hamar",
            "Jorde",
            "Arvesen",
            "Helland",
            "Haarstad",
            "Bjorgen",
            "Ulven",
            "Bjelland",
            "Solem",
            "Sund"
          ];

          var suffix = [
            "the Shackled",
            "the Lonely",
            "the Ambitious",
            "the Small",
            "the Giant",
            "the Weak",
            "the Meek",
            "the Righteous",
            "the Young",
            "the Fat",
            "the Cold",
            "the Bloody",
            "the Ill",
            "the Coward",
            "the Silent",
            "of Oakburn",
            "of Karmswald",
            "of The Reich",
            "of Faykeep",
            "of Westerheim",
            "of the Barrows",
            "of Allenfel",
            "of the Chase",
            "of Ernst",
            "of the Hills",
            "of Bellagin",
            "of Oftburg",
            "of Thurderry",
            "of the Ward",
            "the Civilized",
            "of Hooftheim",
            "the Plauged",
            "the Cleaver",
            "the Fleshling",
            "the Mongrel",
            "the Wyrm",
            "of the Crow",
            "the Tongue Splitter",
            "the Charming",
            "the Acolyte",
            "the Betrothed",
            "the Liar",
            "the Keeper",
            "of the Void",
            "the Old",
            "the Blind",
            "the Gored",
            "Toad-Bane",
            "Toad-Bane",
            "the Forgivable",
            "the Splintered",
            "the Keeper of Lies",
            "the Drowning God",
            "the Swine",
            "of the Wilds",
            "Thrice-Burried",
            "the Breath of the Gods",
            "the Cherished",
            "the Vulgar",
            "the Invincible",
            "the Blasphemer",
            "the Unbroken",
            "the Unshackeled",
            "the Mad",
            "the Seer",
            "Black-Lungs",
            "the Long Traveled",
            "the Weary",
            "of the Fourth Blight",
            "of the Final Hour",
            "of the First Hour",
            "the First Born",
            "the Last Born",
            "the Elder",
            "the Senseless",
            "the Reader",
            "the Dark",
            "the Enlightened",
            "the Dull",
            "follower of Kor",
            "of the Tweleve",
            "the First",
            "the Second",
            "the Third",
            "the Fourth",
            "the Fifth",
            "the Sixth",
            "the Godless",
            "the Hefty",
            "the Contagious",
            "the Inverted",
            "the Vessel",
            "the Pastel",
            "Pact-Bound",
            "of Woe",
            "the Herald",
            "the Cursed",
            "the Crimson",
            "the White",
            "the Black"

          ];

          var prefix = [
            "Master",
            "Protector",
            "Tribune",
            "Saint",
            "Assistant",
            "Earl",
            "Prime",
            "Chaplain",
            "Templar",
            "Professor",
            "Assistant",
            "Librarian",
            "Sir",
            "Lord",
            "Imperator",
            "Governor",
            "Prince",
            "Corporal",
            "General",
            "Commander",
            "Exarch"
          ];

          //Finds first name for a male
          var randomSelection = Math.floor(Math.random() * firstName.length);
          var names = firstName[randomSelection];

          //Finds last name
          randomSelection = Math.floor(Math.random() * lastName.length);
          names = (names + " " + lastName[randomSelection]);

          //Adds prefix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 5)
          {
            randomSelection = Math.floor(Math.random() * prefix.length);
            names = (prefix[randomSelection] + " " + names);
          }

          //Adds suffix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 10)
          {
            randomSelection = Math.floor(Math.random() * suffix.length);
            names = (names + " " + suffix[randomSelection]);
          }

          return names;

        });
    });

  //Creates a female name on press
  $("#inputButtonF").click(function(){
        $(".randomNameInfo").html(function(){
          var firstName = [
            "Theri",
            "Brinfre",
            "Subu",
            "Kuli",
            "Suve",
            "Brithan",
            "Reidda",
            "Yeva",
            "Alina",
            "Sonya",
            "Slavena",
            "Lera",
            "Evelina",
            "Frosya",
            "Alisa",
            "Raya",
            "Marta",
            "Emma",
            "Zoya",
            "Emilia",
            "Sophie",
            "Mara",
            "Irene",
            "Jessica",
            "Judith",
            "Monika",
            "Sigrid",
            "Ingrid",
            "Veronika",
            "Inga",
            "Cathrin",
            "Natalie",
            "Magda",
            "Verona",
            "Dorothea",
            "Nicola",
            "Wibke",
            "Ella",
            "Hilde",
            "Valerie",
            "Katja",
            "Auguste",
            "Erica",
            "Sonja",
            "Raya",
            "Elya",
            "Anya",
            "Sophya",
            "Verok",
            "Alina",
            "Tetyana",
            "Masha",
            "Sveta",
            "Ulya",
            "Nika",
            "Roza",
            "Narin",
            "Aleyda",
            "Mira",
            "Lucienne",
            "Monia",
            "Alwina",
            "Anouk",
            "Gelvira",
            "Oonagh",
            "Liuva",
            "Gaatha",
            "Teja",
            "Impi",
            "Kiira",
            "Sylvia",
            "Paivi",
            "Salla",
            "Noora",
            "Olivia",
            "Mari",
            "Elsi",
            "Iina",
            "Emmi",
            "Heidi",
            "Aini",
            "Sointu",
            "Pihla",
            "Gwen",
            "Karen",
            "Bianca",
            "Jan",
            "Nina",
            "Yaelle",
            "Eved",
            "Esa",
            "Siw",
            "Elsy",
            "Litha",
            "Hagny",
            "Penny",
            "Ammy",
            "Oddny",
            "Svanfrid",
            "Ragnvor",
            "Vigdis"


          ];

          var lastName = [
            "Wolfsohn",
            "Gerster",
            "Korsch",
            "Beer",
            "Heidler",
            "Strier",
            "Teyber",
            "Traub",
            "Dorn",
            "Wernz",
            "Hersh",
            "Wexner",
            "Scheck",
            "Hopfer",
            "Hoger",
            "Hagel",
            "Scheck",
            "Drossel",
            "Voigt",
            "Horstmann",
            "Martin",
            "Apel",
            "Ober",
            "Schultz",
            "Heller",
            "Heim",
            "Dahmen",
            "Rosin",
            "Wahl",
            "Mayr",
            "Steinberg",
            "Denker",
            "Haass",
            "Elser",
            "Blatt",
            "Dullum",
            "Norberg",
            "Baardsen",
            "Vee",
            "Salmonsen",
            "Ohlsen",
            "Opsal",
            "Danielsen",
            "Lovland",
            "Jorstad",
            "Ulberg",
            "Lybeck",
            "Underberg",
            "Asplund",
            "Nystrom",
            "Backer",
            "Sabo",
            "Selvig",
            "Overbey",
            "Bentzen",
            "Hamar",
            "Jorde",
            "Arvesen",
            "Helland",
            "Haarstad",
            "Bjorgen",
            "Ulven",
            "Bjelland",
            "Solem",
            "Sund"
          ];

          var suffix = [
            "the Shackled",
            "the Lonely",
            "the Ambitious",
            "the Small",
            "the Giant",
            "the Weak",
            "the Meek",
            "the Righteous",
            "the Young",
            "the Fat",
            "the Cold",
            "the Bloody",
            "the Ill",
            "the Coward",
            "the Silent",
            "of Oakburn",
            "of Karmswald",
            "of The Reich",
            "of Faykeep",
            "of Westerheim",
            "of the Barrows",
            "of Allenfel",
            "of the Chase",
            "of Ernst",
            "of the Hills",
            "of Bellagin",
            "of Oftburg",
            "of Thurderry",
            "of the Ward",
            "the Civilized",
            "of Hooftheim",
            "the Plauged",
            "the Cleaver",
            "the Fleshling",
            "the Mongrel",
            "the Wyrm",
            "of the Crow",
            "the Tongue Splitter",
            "the Charming",
            "the Acolyte",
            "the Betrothed",
            "the Liar",
            "the Keeper",
            "of the Void",
            "the Old",
            "the Blind",
            "the Gored",
            "Toad-Bane",
            "Toad-Bane",
            "the Forgivable",
            "the Splintered",
            "the Keeper of Lies",
            "the Drowning God",
            "the Swine",
            "of the Wilds",
            "Thrice-Burried",
            "the Breath of the Gods",
            "the Cherished",
            "the Vulgar",
            "the Invincible",
            "the Blasphemer",
            "the Unbroken",
            "the Unshackeled",
            "the Mad",
            "the Seer",
            "Black-Lungs",
            "the Long Traveled",
            "the Weary",
            "of the Fourth Blight",
            "of the Final Hour",
            "of the First Hour",
            "the First Born",
            "the Last Born",
            "the Elder",
            "the Senseless",
            "the Reader",
            "the Dark",
            "the Enlightened",
            "the Dull",
            "follower of Kor",
            "of the Tweleve",
            "the the First",
            "the the Second",
            "the the Third",
            "the the Fourth",
            "the the Fifth",
            "the the Sixth",
            "the Godless",
            "the Hefty",
            "the Contagious",
            "the Inverted",
            "the Vessel",
            "the Pastel",
            "Pact-Bound",
            "of Woe",
            "the Herald",
            "the Cursed",
            "the Crimson",
            "the White",
            "the Black"

          ];

          var prefix = [
            "Master",
            "Protector",
            "Tribune",
            "Saint",
            "Assistant",
            "Baroness",
            "Duchess",
            "Greve",
            "Templar",
            "Professor",
            "Assistant",
            "Librarian",
            "Madame",
            "Lady",
            "Imperator",
            "Governess",
            "Princess",
            "Corporal",
            "General",
            "Commander",
            "Exarch"
          ];

          //Finds first name for a female
          var randomSelection = Math.floor(Math.random() * firstName.length);
          var names = firstName[randomSelection];

          //Finds last name
          var randomSelection = Math.floor(Math.random() * lastName.length);
          names = (names + " " + lastName[randomSelection]);

          //Adds prefix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 5)
          {
            randomSelection = Math.floor(Math.random() * prefix.length);
            names = (prefix[randomSelection] + " " + names);
          }

          //Adds suffix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 10)
          {
            randomSelection = Math.floor(Math.random() * suffix.length);
            names = (names + " " + suffix[randomSelection]);
          }
          return names;
        });
    });
});

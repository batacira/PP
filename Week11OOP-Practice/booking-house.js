'use strict';

(function () {
    var CONTINENTS = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    });

    //******* Country ******/

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    //******* Person *******/

    function Person(name, surname, dateOfBirth) {
        if (!name || !surname || !dateOfBirth) {
            throw new Error('All fields are requared')
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.getData = function () {
            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();
            var result = day + '.' + month + '.' + year

            return [this.name, this.surname, result].join(' ')
        }

        this.getAge = function () {
            var currentYear = (new Date()).getFullYear();
            return currentYear - this.dateOfBirth.getFullYear();
        }
    }

    //******* Player *******/

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        var vowels = ['a', 'e', 'i', 'o', 'u'];
        for (var i = 1; i < country.name.length; i++) {
            var letter = this.country.name[i];
            if (vowels.includes(this.country.name[i])) {
                continue;
            }
            var secondLetter = letter;
            break;
        }
        var firstLetter = country.name[0];

        var fAndS = firstLetter.toUpperCase() + secondLetter.toUpperCase();

        this.getPlayerData = function () {
            return fAndS + ', ' + (country1.odds * betAmount) + ' eur, ' + person1.name + ' ' + person1.surname + ', ' + person1.getAge();
        }

    }

    //****** Address *******/

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        var vowels = ['a', 'e', 'i', 'o', 'u'];
        for (var i = 1; i < country.length; i++) {
            var letter = this.country[i];
            if (vowels.includes(this.country[i])) {
                continue;
            }
            var secondLetter = letter;
            break;
        }
        var firstLetter = country[0];

        var fAndS = firstLetter.toUpperCase() + secondLetter.toUpperCase();
        this.getData = function () {
            return [street + ' ' + number + ', ' + postalCode + ' ' + city + ', ' + fAndS].join();
        }
    }

    //******* Betting Place *******/

    function BettingPlace(address) {
        this.address = address;
        listOfPlayers = [];

        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);

            this.getData = function () {
                var sumOfBets = 0;
                for (var i = 0; i < this.listOfPlayers.length; i++) {
                    sumOfBets += this.listOfPlayers[i].betAmount;
                }
                return (
                    this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + sumOfBets + "eur"
                );
            };
        }
    }

    //******* BettingHouse *******/

    function BettingHouse(competition, numberOfPlayers) {

    }

    var country1 = new Country('Serbia', 55, CONTINENTS.EUROPE);

    var person1 = new Person('Milos', 'Ciric', '11-11-1986');

    var player1 = new Player(person1, 2222, country1);
    console.log(player1.getPlayerData());

    // console.log(person1.getData());

    var address1 = new Address('Serbia', 'Nis', 18000, 'Mokranjceva', 36);
    // console.log(address1.getData());

    //Testing

    try {


    } catch (error) {
        console.log('Error message: ' + error.message);
    }
})();







// function Country(name, odds, continent) {
//     this.countryName = name;
//     this.countryOdds = odds;
//     this.continent = continent;
//     this.countryShort = function () {
//         var countryArr = this.countryName.split("");
//         var lastCountryLetter = "";
//         var vowels = ["A", "E", "I", "O", "U"];
//         for (var i = 1; i < countryArr.length; i++) {
//             if (!vowels.includes(countryArr[i].toUpperCase())) {
//                 lastCountryLetter = countryArr[i].toUpperCase();
//                 break;
//             }
//         }
//         return countryArr[0] + lastCountryLetter;
//     };
// }



// var m = new Date();
// console.log(m);






















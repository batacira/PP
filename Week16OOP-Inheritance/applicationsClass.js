class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence() {
        if (this.licence === 'CC') {
            return true;
        } else {
            return false;
        }
    }
    like() {
        return ++this.stars;
    }
    showStars() {
        console.log(this.stars);
    }
}

class WebApp extends App {
    constructor(name, licence, stars, url, technologies) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }

    getData() {
        console.log(this.name + ', ' + this.licence + ', ' + this.stars + ', ' + this.url + ', ' + this.technologies);
    }
    reactBased() {
        if (this.technologies === 'react') {
            return true;
        }
        else {
            return false;
        }
    }
}

class MobileApp extends App {
    constructor(name, licence, stars, platforms) {
        super(name, licence, stars);
        this.platforms = platforms
    }

    getData() {
        console.log(this.name + ', ' + this.licence + ', ' + this.stars + ', ' + this.platforms);
    }
    forAndroid() {
        if (this.platforms === 'Android') {
            return true;
        }
        else {
            return false;
        }
    }
}

webapp1 = new WebApp('Viber', 'CC', 5, 'www.viber.com', 'react');
android1 = new MobileApp('Biber', 'CC', 9, 'Android');

// console.log(webapp1.reactBased());
android1.showStars();
console.log(android1.like());
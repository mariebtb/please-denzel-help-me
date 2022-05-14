// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = 'Is ' + actor + ' an inspirational actor?';
// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
  'married': 1983,
  'presidentOfTheUnitedStates': false,
  'children': ['John David', 'Katia', 'Olivia', 'Malcolm']
}
// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name = 'A Raisin in the Sun';
stage.year = '2014';
// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards['movie'] = 'Training Day';
// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork = {
  'Carbon Copy': 1981,
  'A Soldier Story': 1984,
  'Power': 1986,
  'Cry Freedom': 1987,
  'For Queen and Countryy': 1988
}
// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
debaters.map(debater => debater.toUpperCase());
// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push('tonyscott')
// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector = directors.shift();
// 3. add "himself" value to the start of `directors` array
directors.unshift('himself');
// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const secondDirector = directors.splice(1, 1)[0]
// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const thirdDirector = directors[1]

// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']
function duplicate(list) {
  const duplicatedList = [];
  for (let i = 0; i < list.length; i++) {
    duplicatedList.push(list[i]);
  }
  return duplicatedList.concat(list)
}
// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = (names) => {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(quotes));
// ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).
document.getElementsByClassName("right small-12 columns");
// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?
39
// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// curl api can curl interacts with the server by default using an HTTP GET request method, which is typically used for reading data only.
// the response is an object with id= 6616 and all data refer to the Cast Credit with name = "Zach Shirey" , country , url , image ...
// the result =  { "id": 6616, "url": "https://www.tvmaze.com/people/6616/zach-shirey", "name": "Zach Shirey", "country": null, "birthday": null, "deathday": null, "gender": "Male", "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/62/156083.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/62/156083.jpg" }, "updated": 1466068216, "_links": { "self": { "href": "https://api.tvmaze.com/people/6616" } } }

// Q14. Refactor the following codebase with a promise notation
new Promise(function (resolve, reject) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      // handle the error, the return is important here
      // so execution stops here
      reject(err)
    }
    // use the data object
    console.log(data)
    resolve(data)
  })
})

// Q15. Refactor the following codebase with async/await notation

async () => {
  const response = await fetch('http://api.tvmaze.com/search/people?q=denzel+washington');
  const data = await response.json();
  const { person } = data[0];
  const { id } = person;
  const response1 = fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  const resFinal = await response1.json();
  console.log(resFinal);
}


// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

// 3 web sites
// 1 ==> https://www.leboncoin.fr/
// 2 ==> www.figma.com
// 3 ==> www.mercedes-benz.fr
// 4 ==> http://www.amazon.com

// Q17. Describe an ESILV project that you worked on that you’re proud of?

// I am proud to have worked on the python project of the first semester where it was about making a neural network to predict
// our results. I really like coding in python so I liked the project but it was also a success in terms of our organization in the team.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

// I'm not very proud of my C# code projects from the first years at ESILV. Indeed, I didn't like coding in this language at the time and didn't always understand what
// I was doing. Obviously, I learned a lot doing them but I don't think my work was very relevant.

// Q19. What are some things you like about the developer tools you use?

// These tools help with a variety of tasks, such as inspecting HTML, JavaScript, and CSS. Additionally,
// they allow me to inspect the time a page takes to load and bandwidth usage.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?

//  There is an s in architecture because there are several architectures for an application.
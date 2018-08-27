const recipeCard = document.getElementById('card');

const url = 'http://more-recipes-25.herokuapp.com/api/v1/recipes/';

function getStuff() {
  console.log('getting data');

  fetch(url)
  .then((data) => {
  	console.log('xddd');
  	return data.json(); 	
  })
  .then((myJson) => {
  	console.log(myJson.data.recipes);
  	const array = myJson.data.recipes;

  	for(let i=0; i < array.length; i++) {
  		// let li = createNode('li');
  		// let spanTitle = createNode('span');
  		// let spanCategory = createNode('span');
  		// let spanDirections = createNode('span');
  		// let spanUpVotes = createNode('span');
  		// let spanDownVotes = createNode('span');
  		// let img = createNode('img');

	  	// spanTitle.innerHTML = `Title: ${array[i].title} \n`;
  		// spanCategory.innerHTML = `Category: ${array[i].category}`;
  		// spanDirections = `Directions: ${array[i].directions}`;
  		// spanUpVotes = `Upvotes: ${array[i].upvotes}`;
  		// spanDownVotes = `DownVotes: ${array[i].downvotes} \n`;
  		// img.src = `http://more-recipes-25.herokuapp.com/${array[i].recipeImage}`;

	  	// append(li, spanTitle);
	  	// append(li, spanCategory);
	  	// append(li, spanDirections);
	  	// append(li, spanUpVotes);
	  	// append(li, spanDownVotes);
	  	// append(li, img);
	  	// let ul = createNode('ul');
  		// ul.innerHTML = '<li> Title:' + 	`${array[i].title}` + '</li>';
  		// ul.innerHTML += '<li> category:' + `${array[i].category}` + '</li>';
  		// ul.innerHTML += '<li> directions:' + `${array[i].directions}` + '</li>';
      recipeCard.innerHTML += `<div class="card mb-5" >
      <div class="card mb-5" >
      <img class="card-img-top" src="http://more-recipes-25.herokuapp.com/${array[i].recipeImage}" alt="Recipe image">

                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${array[i].title}</h5>
                            <small class="text-muted mb-2"><p>${array[i].category}</p></small>
                            
                            <p class="card-text">${array[i].directions}</p>
                            <a href="one-recipe.html" class="btn btn-sm style-btn" id="details-button">Details</a>
                        </div>
                        <div class="m-0 card-footer text-center text-muted">
                            <div class="row">
                                <div class="text-center">
                                    <ul class="list-inline">
                                        <div class="list-inline-item">
                                            <i class="fa fa-arrow-up" aria-hidden="true"></i>${array[i].upvotes}</div>
                                        <div class="list-inline-item">
                                            <i class="fa fa-arrow-down" aria-hidden="true"></i>${array[i].downvotes}</div>
                                        <div class="list-inline-item">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            0</div>
                                        <div class="list-inline-item">Takes ${array[i].preparationTime} to prepare</div>
                                    </ul>
                                </div>
                            </div>
                        </div>
      </div>`;
      
  	}
  })
  .catch((error) => {
  	// console.log(error);
  });
}

getStuff();

// rewrite
 function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }
  

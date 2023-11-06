 // Fetch data from the API
 fetch('https://jsonplaceholder.typicode.com/photos')
 .then(response => response.json())
 .then(data => {
   const imageContainer = document.getElementById('image-container');

   data.forEach(image => {
     const imageDiv = document.createElement('div');
     imageDiv.className = 'col-lg-3 col-md-6 col-sm-12 col-xs-12 image-container'; // Adjust column sizes based on your requirements

     const imgElement = document.createElement('img');
     imgElement.src = image.url;
     imgElement.className = 'img-fluid';
     
     imageDiv.appendChild(imgElement);
     imageContainer.appendChild(imageDiv);
   });
 })
 .catch(error => console.error(error));
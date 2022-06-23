const firstFunction = () => {
    const inputValue=document.querySelector('input').value
    const generatedElement=document.createElement('p');
     generatedElement.innerHTML='<p>Hello ${inputValue}, Welcome to bootcamp</p>';
     document.body.appendChild(generatedElement);
    }
//1.Select the Target Element
const appContainer=document.getElementById("app");
const generateBtn=document.getElementById("generateBtn");

//2.Create New HTML Elements (document.createElement())
function createProfileCard() {
    //create the profile card container
    const profileCard=document.createElement("div");
    //add class
    profileCard.className="profile-card";
    //create an image element for the profile-card
    const profileImage=document.createElement("img");
    //add img to
    profileImage.src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg";

        //create the heading element
        const profileName=document.createElement("h3");
        profileName.textContent='John Seena';

    //create a paragraph element for the desc
    const profileDescription=document.createElement("p");
    profileDescription.textContent="A passionate web developer with experience in JavaScript and React.";
    
    //3.Add content to the element created (innerHTML/textContent)

    //4.Add Classes of ids if needed //add any attribute
     //5.append the elements to build the structure
        //Append all the elements to the profile card
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    //append the profile card to the container
    //Append to the DOM
    appContainer.appendChild(profileCard);
    console.log(appContainer);
}

generateBtn.addEventListener('click',createProfileCard);



function collectData(){
    const languageProficiencyEls=document.getElementsByName("languageProficiency");
    console.log(languageProficiencyEls);

    //Loop through the NodeList to find the selected radio button
    for(let i1 = 0;i1<languageProficiencyEls.length;i1++){
        if (languageProficiencyEls[i1].checked){
            console.log('Selected language is:' + languageProficiencyEls[i1].value);
        }
    }

    //log all elements with the name 'email'
    const emailsEl=document.getElementById('email');
    const inputValue = emailsEl.value;
    console.log(inputValue);
    
}
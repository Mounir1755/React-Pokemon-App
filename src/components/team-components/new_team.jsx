// TO-DO:
// ***********************************************************
// FUNCTION: NEWTEAM
// ***********************************************************
// WHAT IT DOES:
// 1. You should be able to create a new "instance" in localStorage
//    using the form
// 2. You should be able to search for Pokémon and add them to the
//    selected team
// 3. Be able to rename a team
// 4. Be able to delete a team
// ***********************************************************

function NewTeam () {
    const CreateNewTeam = (e) => {
                       // get value from a element by id and trim
        const teamName = document.getElementById('input').value.trim(); // <- trim = remove unnesecary spaces at the start and end
            // check if teamName isnt empty
            if (teamName === "") {
                e.preventDefault() // <- stops refresh of the page after submit
                console.log("Vul eerst iets in!")
            } else {
                console.log(`Team: team_${teamName} is aangemaakt!`)
            }
        
        // make new item in localstorage with teamName
        localStorage.setItem(`team_${teamName}`, JSON.stringify([]));
    };

    return(
        <>
            <form onSubmit={CreateNewTeam}>
                <input type="text" id="input"/>
                <button type="submit" className="btn btn-success ms-2">
                    klik dan als je kan
                </button>
            </form>    
        </>
    )
}
export default NewTeam
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
    const handelNewTeam = (e) => {
        e.preventDefault();

        const teamName = document.getElementById('d1').value.trim();

        localStorage.setItem(teamName, JSON.stringify([]));
    };

    return(
        <>
            <form onSubmit={handelNewTeam}>
                <input type="text" id="d1"/>
                <button type="submit" className="btn btn-success ms-2">
                    klik dan als je kan
                </button>
            </form>    
        </>
    )
}
export default NewTeam
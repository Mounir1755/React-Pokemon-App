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
function GetAllTeams() {
  const teams = [];

  // loop through all items in localStorage
  for (let i = 0; i < localStorage.length; i++) {

    // safely get the key name at the current index
    const key = localStorage.key(i);

    // check if the key starts with "team_"
    if (key.startsWith("team_")) {

      // parse the stored JSON data back into an object
      const data = JSON.parse(localStorage.getItem(key));

      // add the team name and its data to the teams array
      teams.push({ name: key, data });
    }
  }

  return (
    <>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            {/* substring cuts all charachters under 5 */}
            <strong>{team.name.substring(5)}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GetAllTeams;


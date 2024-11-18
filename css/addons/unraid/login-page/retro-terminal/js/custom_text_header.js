
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
 ____    _    ____  ___ _____ _     _   _ _____ _____ 
/ ___|  / \\  |  _ \\|_ _| ____| |   | \\ | | ____|_   _|
\\___ \\ / _ \\ | |_) || ||  _| | |   |  \\| |  _|   | |  
 ___) / ___ \\|  _ < | || |___| |___| |\\  | |___  | |  
|____/_/   \\_\\_| \\_\\___|_____|_____|_| \\_|_____| |_|  
                                                   
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

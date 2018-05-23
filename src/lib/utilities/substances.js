const substances = [
    "Adderall",
    "Alcohol",
    "Ambien",
    "Ativan",
    "Bath Salts",
    "Coke",
    "Cloud 9 / Mojo",
    "Club Drugs",
    "Cocaine",
    "Codeine",
    "Crack",
    "Darvocet",
    "Demerol",
    "Dexadrine",
    "DXM",
    "Synthetic Pills",
    "Ecstasy",
    "Flakka (Alpha-PVP)",
    "GHB",
    "Hallucinogens",
    "Heroin",
    "Hydrocodone",
    "Inhalants",
    "K2/Spice (Synthetic Marijuana)",
    "Ketamine",
    "Lortab",
    "LSD",
    "Marijuana",
    "MDMA (Ecstasy / Molly)",
    "Meth",
    "Mushrooms",
    "Nitrous Oxide",
    "Opana",
    "Opiates",
    "OxyContin",
    "PCP",
    "Percocet",
    "Percodan",
    "Prescription Drugs",
    "Rohypnol",
    "Salvia",
    "Steroids (Anabolic)",
    "Superman Pills",
    "Tobacco/Nicotine",
    "Ultram",
    "Valium",
    "Vicodin",
    "Xanax"
];

/**
 * Matches substances using the passed
 * query string
 * @param {*String} query
 * @returns {Array} Array of matching substances as strings
 */
export const matchSubstances = query => {
    return substances.filter(s => {
        const matcher = new RegExp("^" + query, "gi");
        return matcher.test(s);
    });
};

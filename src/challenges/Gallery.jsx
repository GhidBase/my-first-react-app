function getImageUrl(imageId, size = "s") {
    return "https://i.imgur.com/" + imageId + size + ".jpg";
}

// This Gallery component contains some very similar
// markup for two profiles. Extract a Profile component
// out of it to reduce the duplication. You’ll need to
// choose what props to pass to it.

/* 
    h2 Name
    Profession
    Awards
    Discovered
*/

function Profile({ name, profession, awards, discovered, imageURL }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageURL)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    {"(" + awards.join(", ") + ")"}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>

            <Profile
                name={"Maria Skłodowska-Curie"}
                profession={"physicist and chemist"}
                awards={[
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal",
                ]}
                discovered="polonium (chemical element)"
                imageURL={"szV5sdG"}
            />

            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl("YfeOqp2")}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        geochemist
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        (Miyake Prize for geochemistry, Tanaka Prize)
                    </li>
                    <li>
                        <b>Discovered: </b>a method for measuring carbon dioxide
                        in seawater
                    </li>
                </ul>
            </section>
            
        </div>
    );
}

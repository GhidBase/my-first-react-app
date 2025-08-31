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
            <Profile
                name={"Katsuko Saruhashi"}
                profession={"geochemist"}
                awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
                discovered={"a method for measuring carbon dioxide in seawater"}
                imageURL={"YfeOqp2"}
            />
        </div>
    );
}

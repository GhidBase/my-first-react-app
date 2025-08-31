import { Children } from "react";

export default function Profile({ children }) {
    function Card({ imgsrc, name, about }) {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h1>Photo</h1>
                        <img
                            className="avatar"
                            src={imgsrc}
                            alt={name}
                            width={70}
                            height={70}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h1>About</h1>
                        <p>{about}</p>
                        {children}
                    </div>
                </div>

                {children}
            </div>
        );
    }

    return (
        <Card
            imgsrc={"https://i.imgur.com/OKS67lhm.jpg"}
            name={"Aklilu Lemma"}
            about={
                "Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis."
            }
        />
    );
}

// Extract a Card component from the markup below,
// and use the children prop to pass different JSX to it:

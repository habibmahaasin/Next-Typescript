import { FunctionComponent } from "react";
import { DetailData } from "../../../domain/entities";

export const Card:FunctionComponent<DetailData> = ({user_id, name, email}) => {
    return (
        <div className="card">
            <h3>{user_id}</h3>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}